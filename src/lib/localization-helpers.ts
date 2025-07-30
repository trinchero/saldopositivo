import contacts from "@/content/global/contacts.json";
import footer from "@/content/global/footer.json";
import header from "@/content/global/header.json";
import seo from "@/content/global/seo.json";
import style from "@/content/global/style.json";
import widget from "@/content/global/widget.json";

export function getLocalizedSettings(): LocalizedSettings {
  return {
    header,
    footer,
    contacts,
    seo,
    style,
    widget,
  };
}
