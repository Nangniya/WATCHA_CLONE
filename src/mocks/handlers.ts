import { http, HttpResponse } from 'msw';
import { MSW_API, NOTICELIST } from '@/constants/mock';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`${MSW_API}/notification`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(NOTICELIST);
  }),
];
