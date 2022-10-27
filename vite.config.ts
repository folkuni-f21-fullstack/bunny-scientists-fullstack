import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< Updated upstream
      "/api": "http://localhost:5174/"
    }
  }
})
=======
      "/api": "http://localhost:6969/",
    },
  },
});
>>>>>>> Stashed changes
