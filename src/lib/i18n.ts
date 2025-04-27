import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { intl } from "@/config/intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(intl.locales, requested)
    ? requested
    : intl.defaultLocale;

  return {
    locale,
    messages: (await import(`../langs/${locale}.json`)).default,
  };
});
