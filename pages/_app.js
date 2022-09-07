import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-blue-700 text-white text-center text-lg py-4">
        Dealer Management System
      </div>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
