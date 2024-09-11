// src/globals.d.ts

// Declare your global types
declare global {
    interface Park {
      id: string;
      fullName: string;
      description: string;
    }
  
    interface ParkResponse {
      data: Park[];
    }
  }
  
  declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_NPS_API_KEY: string;
    }
  }
  
  export {};
  