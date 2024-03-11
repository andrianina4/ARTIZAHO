"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
// const queryClient = new QueryClient();

interface props {
  children: ReactNode;
}

export default function Provider({ children }: props) {
  const [client] = useState(new QueryClient());
  return (
    <SessionProvider>
      <QueryClientProvider client={client}>
        <ReactQueryStreamedHydration>
          <SnackbarProvider autoHideDuration={4000}>
            {children}
          </SnackbarProvider>
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}