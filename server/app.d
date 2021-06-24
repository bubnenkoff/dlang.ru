const url = "http://127.0.0.1:8080/";

import vibe.d;
import dini;

shared static this()
{
    auto ini = Ini.Parse("config.ini");
    auto settings = new HTTPServerSettings;
    settings.port = to!ushort(ini.getKey("port"));
    settings.bindAddresses = [ini.getKey("ipv6"), ini.getKey("ipv4")];

    auto router = new URLRouter;
    router.get("*", serveStaticFiles("public/"));
    router.get("*", redirectNoLastSlash());
    router.get("*", serveIndex("public/dist/index.html"));



    listenHTTP(settings, router);

    logInfo("Please open "~url~" in your browser.");
    runApplication();
}

HTTPServerRequestDelegateS redirectNoLastSlash ()
{
    void callback(scope HTTPServerRequest req, scope HTTPServerResponse res)
    {
        if (req.requestURI.length > 1 && req.requestURI[$-1] == '/')
        {
            res.redirect(req.requestURI[0..$-1], 301);
            return ;
        }
    }

    return &callback;
}

HTTPServerRequestDelegateS serveIndex(string path, HTTPFileServerSettings settings = null)
{
    import vibe.core.path: NativePath;
    import vibe.http.fileserver: sendFile;

    void callback(scope HTTPServerRequest req, scope HTTPServerResponse res)
    {
        sendFile(req, res, NativePath(path), settings);
    }

    return &callback;
}
