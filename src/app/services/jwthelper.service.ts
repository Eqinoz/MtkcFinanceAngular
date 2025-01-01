import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1]; // JWT'nin ikinci kısmı (payload)
      return JSON.parse(atob(payload)); // Base64 çöz ve JSON olarak dön
    } catch (error) {
      console.error('Token çözümlenemedi:', error);
      return null;
    }
  }

  getUserRole(token: string): string | null {
    const decodedToken = this.decodeToken(token);
    if (decodedToken) {
      return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    }
    return null;
  }

  getUserName(token: string): string | null {
    const decodedToken = this.decodeToken(token);
    if (decodedToken) {
      return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    }
    return null;
  }
}
