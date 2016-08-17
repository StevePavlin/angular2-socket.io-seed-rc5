/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthServiceService } from './auth-guard.service';

describe('Service: AuthService', () => {
  beforeEach(() => {
    addProviders([AuthGuard]);
  });

  it('should ...',
    inject([AuthGuard],
      (service: AuthGuard) => {
        expect(service).toBeTruthy();
      }));
});
