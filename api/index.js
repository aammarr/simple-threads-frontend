import expressService from '@/api/expressConnect';
import authService from '@/api/auth';

export default ($axios, store, ctx) => ({
  expressService: expressService($axios, store, ctx),
  authService: authService($axios, store, ctx),
});
