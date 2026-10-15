/* 백세장바구니 제휴 링크 설정
 *
 * 사용법: 쿠팡 파트너스(partners.coupang.com)에 로그인 →
 * 각 제품명으로 링크 생성 → 아래 따옴표 안에 붙여넣기.
 * 링크가 비어 있는 제품의 버튼은 자동으로 "쿠팡에서 검색"으로 바뀝니다.
 */
const AFFILIATE_LINKS = {
    "omron-hem7156": "",
  "omron-hem7121j": "",
  "microlife-bp3bm1": "",
  "omron-hvf022": "",
  "dewell-button": "",
  "sovi-wireless": "",
  "chongkundang-msm": "",
  "quancell-msm": "",
  "esther-msm": "",
  "ildong-hyimmune": "",
  "selex-lactofree": "",
  "nutridday-goat": "",
  "daemedical-ge": "",
  "ddjj-belly": "",
  "hanil-hp3560b": "",
  "drbarmi": "",
  "comet-pillow": "",
  "muro-zero": "",
  "jw-iclear": "",
  "anguk-ieyeon": "",
  "hugrab-eye": "",
  "egojin-8320": "",
  "maxly-silent": "",
  "dietschool-v2": "",
  "oa-bubblefoot": "",
  "hubat-ir": "",
  "everjoy-joy010": "",
  "caresens-n": "",
  "accuchek-instant": "",
  "sd-checkgold2": "",
};

/* 제품별 쿠팡 검색 폴백 (링크 없을 때 사용) */
const COUPANG_SEARCH = (keyword) =>
  "https://www.coupang.com/np/search?q=" + encodeURIComponent(keyword);

function resolveLink(key, keyword) {
  const url = AFFILIATE_LINKS[key];
  return url && url.trim() ? url.trim() : COUPANG_SEARCH(keyword);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-aff]").forEach((btn) => {
    const key = btn.getAttribute("data-aff");
    const keyword = btn.getAttribute("data-kw") || btn.textContent.trim();
    btn.href = resolveLink(key, keyword);
    btn.target = "_blank";
    btn.rel = "nofollow sponsored noopener";
    if (!AFFILIATE_LINKS[key]) {
      btn.innerHTML = "🔍 쿠팡에서 가격 확인하기";
      btn.classList.add("btn-ghost");
    }
  });
});
