import { localKey, fetchBilling, genBillingsTable } from './index.ts.86ebd794.mjs';

async function copyToClipboard(text) {
  try {
    return await navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function isMobile() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}
function dateFormat(date, fmt = "YYYY-mm-dd HH:MM") {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),
    "m+": (date.getMonth() + 1).toString(),
    "d+": date.getDate().toString(),
    "H+": date.getHours().toString(),
    "M+": date.getMinutes().toString(),
    "S+": date.getSeconds().toString()
    // second
  };
  Object.entries(opt).forEach(([k, v]) => {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? v : v.padStart(ret[1].length, "0")
      );
    }
  });
  return fmt;
}
function splitKeys(keys) {
  return keys.trim().split(/\s*[\|\n]\s*/).filter((k) => /sk-\w{48}/.test(k));
}
function randomKey(keys) {
  return keys.length ? keys[Math.floor(Math.random() * keys.length)] : "";
}
async function fetchWithTimeout(input, init) {
  const { timeout = 500 } = init ?? {};
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(input, {
    ...init,
    signal: controller.signal
  });
  clearTimeout(id);
  return response;
}

const sendKey = ({}).SENDKEY;
const sendChannel = ({}).SENDCHANNEL || "9";
const config = {
  runtime: "edge",
  /**
   * https://vercel.com/docs/concepts/edge-network/regions#region-list
   * disable hongkong
   * only for vercel
   */
  regions: [
    "arn1",
    "bom1",
    "bru1",
    "cdg1",
    "cle1",
    "cpt1a",
    "dub1",
    "fra1",
    "gru1",
    "hnd1",
    "iad1",
    "icn1",
    "kix1",
    "lhr1",
    "pdx1",
    "sfo1",
    "sin1",
    "syd1"
  ]
};
const get = async () => {
  try {
    const keys = Array.from(new Set(splitKeys(localKey)));
    if (keys.length === 0)
      return new Response("");
    if (!sendKey)
      return new Response("");
    const billings = await Promise.all(keys.map((k) => fetchBilling(k)));
    const bannedKeyBillings = billings.filter((k) => k.totalGranted === 0);
    const unBanKeyBillings = billings.filter((k) => k.totalGranted > 0);
    const table = await genBillingsTable(billings);
    const titles = ["帐号余额充足", "没有帐号不可用"];
    if (unBanKeyBillings.some((k) => k.rate < 0.05))
      titles[0] = "有帐号余额已少于 5%";
    if (bannedKeyBillings.length) {
      titles[1] = "有帐号不可用";
    }
    await push(titles.join("，"), table);
  } catch (e) {
    await push(`运行错误
${String(e)}`);
  }
  return new Response(`ok`);
};
async function push(title, desp) {
  if (sendKey)
    await fetch(`https://sctapi.ftqq.com/${sendKey}.send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        desp,
        channel: Number.isInteger(sendChannel) ? Number(sendChannel) : 9
      })
    });
}

const cron = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  config,
  get
}, Symbol.toStringTag, { value: 'Module' }));

export { cron as a, copyToClipboard as c, dateFormat as d, fetchWithTimeout as f, isMobile as i, randomKey as r, splitKeys as s };
