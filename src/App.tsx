import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";
import { Analytics } from "@vercel/analytics/react";

function AppRoutes() {
    return (
        <Switch>
            <Route path="/" component={Portfolio} />
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    return (
        <TooltipProvider>
            <Toaster />
            <Router hook={useHashLocation}>
                {" "}
                <AppRoutes />
            </Router>
            <Analytics />
        </TooltipProvider>
    );
}

export default App;
