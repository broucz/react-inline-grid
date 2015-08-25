export default function isWebKitNeeded(userAgent) {
  return userAgent.indexOf('Chrome') < 0
    && userAgent.indexOf('Safari') > -1;
}
