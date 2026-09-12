import { createProxyMiddleware } from "http-proxy-middleware";

export function createServiceProxy(serviceName: string, target: string) {
  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: (path) => `/${serviceName}${path}`,
  });
}
