// export const environment = {
//   production: false,
//   // apiUrl: 'https://portal.kimpai.com/dotnetcore/kmapBack-end/',
//   apiUrl: 'https://portal.kimpai.com/dotnetcore/kmapBack-end/',
//   whitelist: ['192.168.55.53:1189', '192.168.55.76', 'portal.kimpai.com'],
//   blacklisted: ['192.168.55.53:1189/api','192.168.55.76/ToppWebApi/api/auth']
// };


export const environment = {
  production: false,
  apiUrl: 'https://portal.kimpai.com/dotnetcore/kmapBack-end/',
  // apiUrl: 'http://localhost:5000/api/',
  whitelist: ['192.168.55.53:1189', '192.168.55.76', 'portal.kimpai.com', 'portal.kimpai.com/dotnetcore', 'portal.kimpai.com/dotnetcore/kmapBack-end'],
  blacklisted: ['192.168.55.53:1189/api','192.168.55.76/ToppWebApi/api/auth']
};
