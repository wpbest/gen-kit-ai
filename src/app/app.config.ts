import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'gen-kit-ai',
        appId: '1:46059514094:web:6787dfbe4a4a28ef5dabff',
        storageBucket: 'gen-kit-ai.firebasestorage.app',
        apiKey: 'AIzaSyBOfu0QClB8IjUHgIpVkvOJOOVJ3NM5ZjE',
        authDomain: 'gen-kit-ai.firebaseapp.com',
        messagingSenderId: '46059514094',
        // projectNumber: '46059514094',
        // version: '2',
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideVertexAI(() => getVertexAI()),
  ],
};
