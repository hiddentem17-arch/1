// ============================================================
//  나의 AI 회사 설정 — 여기 한 파일만 고치면 됩니다
// ============================================================
//  회사 이름, 부서 이름, 직원 이름·성격·머리색까지 전부 여기 있어요.
//  다른 파일은 건드리지 않아도 됩니다.
//
//  ⚠️ 딱 2가지 규칙
//   1. 부서 id(research, brand, ...)는 절대 바꾸지 마세요. 시뮬레이션 엔진이
//      이 id로 움직입니다. 바꾸면 캐릭터가 길을 잃어요.
//      → 바꿔도 되는 건 name(부서 이름) · icon · short 입니다.
//   2. 부서는 12개를 유지하세요. 사무실 배치가 4열 3행 = 12칸 고정입니다.
//      안 쓰는 부서는 지우지 말고 이름만 바꿔서 쓰세요.
//
//  직원 수는 자유롭게 늘리고 줄여도 됩니다. 한 팀에 팀장(lead) 1명은 두세요.
// ============================================================

/** 회사 기본 정보 */
export const COMPANY = {
  /** 좌측 상단 헤더에 뜨는 회사 이름 */
  name: "히든템 AI COMPANY",
  /** 헤더 로고 배지에 들어갈 글자 1개 (이모지도 됩니다) */
  logoLetter: "H",
  /** 화면 상단 큰 제목 (앞부분) */
  titlePrefix: "히든템",
  /** 화면 상단 큰 제목 (강조되는 뒷부분) */
  titleAccent: "AI Office",
  /** 브라우저 탭 제목 */
  pageTitle: "히든템 AI Company — 나의 AI 사무실",
  /** 검색·공유될 때 뜨는 설명 */
  description: "오늘 당장 써먹을 수 있는 AI 도구·꿀팁 콘텐츠를 조사·기획·제작·보고까지 돌리는 히든템 AI 오피스",
  /** 창 하단 파일명 느낌의 라벨 */
  windowLabel: "hiddentem_ai_company.exe — 대표실",
  /** 일일 브리핑 제목에 들어갈 이름 */
  reportName: "히든템 AI Office",
} as const;

/** 대표(나) — 사무실 대표실에 앉아 있는 캐릭터 */
export const CEO_PROFILE = {
  name: "히든템 대표",
  callsign: "대표님",
  role: "대표 · 최종 의사결정",
  hair: "#42283a",
  shirt: "#ff8fc0",
  accent: "#fff3b0",
  skin: "#ffdcc4",
  thoughts: [
    "AI는 비서, 최종 결정은 내가 해요.",
    "오늘 결정할 건 딱 1개만 남기자.",
    "저장될 만한 콘텐츠인지부터 본다.",
  ],
};

/**
 * 부서 12개.
 * id = 고정(엔진용) / name·short·icon = 자유롭게 변경
 * task = 오늘 하는 일 / report = 팀장 한줄보고
 */
export const DEPARTMENTS = [
  {
    id: "research",
    name: "시장조사팀",
    short: "trend.lab",
    icon: "🔎",
    task: "업계 뉴스·트렌드 수집",
    report: "출처를 검증하고 오늘의 후보를 정리해요.",
  },
  {
    id: "brand",
    name: "브랜드 분석팀",
    short: "brand.room",
    icon: "🧬",
    task: "채널 흐름·정체성 점검",
    report: "지표 연동이 되면 수치까지 붙습니다.",
  },
  {
    id: "strategy1",
    name: "기획 1팀",
    short: "idea.studio",
    icon: "💡",
    task: "오늘의 아이디어 10개",
    report: "점수 기준으로 TOP 3까지 좁혀요.",
  },
  {
    id: "qa",
    name: "검수팀",
    short: "qa.check",
    icon: "🛡️",
    task: "근거·중복·톤 검사",
    report: "기준에서 벗어난 안은 되돌려보내요.",
  },
  {
    id: "strategy2",
    name: "기획 2팀",
    short: "script.team",
    icon: "✍️",
    task: "승인된 안 원고 작성",
    report: "대표가 고른 아이디어만 글로 옮겨요.",
  },
  {
    id: "reels",
    name: "영상 제작팀",
    short: "video.edit",
    icon: "🎬",
    task: "영상 원본 접수·초안 편집",
    report: "원본은 보존하고 편집본만 새로 만들어요.",
  },
  {
    id: "carousel",
    name: "이미지 제작팀",
    short: "design.studio",
    icon: "🖼️",
    task: "카드·썸네일 디자인",
    report: "필요한 장수만 만들고 CTA로 닫아요.",
  },
  {
    id: "partner",
    name: "협업 소통팀",
    short: "partner.mail",
    icon: "💌",
    task: "협업 문의 검토·답장 초안",
    report: "초안까지만 씁니다. 발송은 대표가 해요.",
  },
  {
    id: "finance",
    name: "정산팀",
    short: "finance.xls",
    icon: "🧾",
    task: "수익·입금 현황 정리",
    report: "현황 파일이 오면 바로 정리합니다.",
  },
  {
    id: "review",
    name: "성과리뷰팀",
    short: "review.data",
    icon: "📈",
    task: "성과·학습점 기록",
    report: "잘된 이유를 패턴으로 남겨요.",
  },
  {
    id: "ops",
    name: "자동화 운영",
    short: "automation.ops",
    icon: "⚙️",
    task: "연동·실패·재시도 관리",
    report: "실패하면 재시도하고 로그를 남겨요.",
  },
  {
    id: "secretary",
    name: "비서실",
    short: "secretary.hq",
    icon: "📋",
    task: "전사 한줄보고·최종 브리핑",
    report: "모든 팀 상태를 모아 결정할 것만 남겨드려요.",
  },
] as const;

/**
 * 직원 명단.
 * dept = 위 부서 id / rank: "lead"(팀장) 또는 "member"(팀원)
 * colors = [머리색, 옷색, 포인트색]
 * thoughts = 자리를 비웠을 때 머리 위에 뜨는 혼잣말
 */
export type StaffEntry = {
  dept: string;
  rank: "lead" | "member";
  name: string;
  role: string;
  colors: [string, string, string];
  thoughts: string[];
  callsign?: string;
};

export const STAFF_LIST: StaffEntry[] = [
  // ① 시장조사팀
  { dept: "research", rank: "lead", name: "강지원", role: "시장조사 팀장", callsign: "소스헌터",
    colors: ["#6b3d34", "#fff3b0", "#ff8fc0"],
    thoughts: ["출처 없는 건 안 믿어요.", "날짜부터 확인할게요."] },
  { dept: "research", rank: "member", name: "한이슬", role: "뉴스 수집",
    colors: ["#2f2a3d", "#c9b8ff", "#b8f0dd"],
    thoughts: ["방금 올라온 거 하나 잡았어요.", "원문부터 대조해볼게요."] },
  { dept: "research", rank: "member", name: "오하늘", role: "동향 조사",
    colors: ["#8a4a3c", "#b8f0dd", "#ff8fc0"],
    thoughts: ["요즘 흐름이 좀 바뀌었어요.", "숫자로 다시 볼게요."] },

  // ② 브랜드 분석팀
  { dept: "brand", rank: "lead", name: "백서연", role: "브랜드 분석 팀장", callsign: "데이터아이",
    colors: ["#372b4a", "#c9b8ff", "#c9b8ff"],
    thoughts: ["데이터 없으면 안 만들어요.", "우리 톤이랑 안 맞으면 반려예요."] },
  { dept: "brand", rank: "member", name: "문가을", role: "지표 분석",
    colors: ["#3c3a4f", "#ffe6f2", "#c9b8ff"],
    thoughts: ["저장률부터 볼게요.", "이건 우연이 아니에요, 패턴이에요."] },
  { dept: "brand", rank: "member", name: "신다온", role: "페르소나 검증",
    colors: ["#5a3450", "#fff3b0", "#ff8fc0"],
    thoughts: ["우리 시청자라면 안 웃겨요.", "타깃이랑 어긋나면 말씀드릴게요."] },

  // ③ 기획 1팀
  { dept: "strategy1", rank: "lead", name: "유단비", role: "기획 1팀장", callsign: "스파크",
    colors: ["#c26e4b", "#ff8fc0", "#fff3b0"],
    thoughts: ["행동으로 안 닫으면 반려예요.", "10개 다 뽑고 점수 매길게요."] },
  { dept: "strategy1", rank: "member", name: "조은결", role: "소재 발굴",
    colors: ["#7b4a2f", "#b8f0dd", "#ff8fc0"],
    thoughts: ["이거 아직 아무도 안 다뤘어요.", "겹치는 소재는 각도 바꿀게요."] },
  { dept: "strategy1", rank: "member", name: "임하람", role: "후킹 카피",
    colors: ["#2c2638", "#fff3b0", "#c9b8ff"],
    thoughts: ["첫 줄에서 안 멈추면 의미 없어요.", "3초 안에 승부 볼게요."] },

  // ④ 검수팀
  { dept: "qa", rank: "lead", name: "최도경", role: "검수 팀장", callsign: "게이트키퍼",
    colors: ["#2d4b46", "#b8f0dd", "#b8f0dd"],
    thoughts: ["근거 링크 없는 안은 반려예요.", "금칙어 스캔 돌립니다."] },
  { dept: "qa", rank: "member", name: "서연우", role: "중복·근거 검사",
    colors: ["#463227", "#ffe6f2", "#b8f0dd"],
    thoughts: ["이거 지난주에 다뤘던 거예요.", "링크가 죽어있으면 반려예요."] },
  { dept: "qa", rank: "member", name: "배소율", role: "톤 검수",
    colors: ["#6c3a55", "#c9b8ff", "#fff3b0"],
    thoughts: ["이 표현은 우리 톤이 아니에요.", "권유형으로 흐리면 다시 써요."] },

  // ⑤ 기획 2팀
  { dept: "strategy2", rank: "lead", name: "정해온", role: "기획 2팀장", callsign: "스토리텔러",
    colors: ["#8b534a", "#fff3b0", "#ff8fc0"],
    thoughts: ["승인 안 된 건 대본으로 안 써요.", "결론은 단정형으로 닫을게요."] },
  { dept: "strategy2", rank: "member", name: "김로운", role: "영상 대본",
    colors: ["#33304a", "#ff8fc0", "#b8f0dd"],
    thoughts: ["훅부터 다시 잡을게요.", "CTA 빠지면 완성이 아니에요."] },
  { dept: "strategy2", rank: "member", name: "안다혜", role: "이미지 원고",
    colors: ["#5d3a2c", "#b8f0dd", "#c9b8ff"],
    thoughts: ["마지막 장이 제일 중요해요.", "장수는 내용에 맞출게요."] },

  // ⑥ 영상 제작팀
  { dept: "reels", rank: "lead", name: "남준서", role: "영상 제작 팀장", callsign: "필름키퍼",
    colors: ["#2c2638", "#ff8fc0", "#ff8fc0"],
    thoughts: ["원본은 절대 안 건드려요.", "복제본에만 작업합니다."] },
  { dept: "reels", rank: "member", name: "하은채", role: "편집",
    colors: ["#4a3a2a", "#fff3b0", "#b8f0dd"],
    thoughts: ["30초 넘으면 잘라낼게요.", "컷 단위로 먼저 정리할게요."] },
  { dept: "reels", rank: "member", name: "표시우", role: "자막·썸네일",
    colors: ["#7a3f58", "#c9b8ff", "#ff8fc0"],
    thoughts: ["썸네일이 절반이에요.", "자막 오타부터 잡을게요."] },

  // ⑦ 이미지 제작팀
  { dept: "carousel", rank: "lead", name: "도경민", role: "이미지 제작 팀장", callsign: "레이아웃마스터",
    colors: ["#d88d68", "#c9b8ff", "#c9b8ff"],
    thoughts: ["장수 고정 안 해요, 내용이 우선이에요.", "표지 3안 뽑아드릴게요."] },
  { dept: "carousel", rank: "member", name: "마루빈", role: "레이아웃",
    colors: ["#3a2f4d", "#ffe6f2", "#ff8fc0"],
    thoughts: ["템플릿은 복제만 해요.", "여백부터 맞출게요."] },
  { dept: "carousel", rank: "member", name: "공지안", role: "텍스트 교체",
    colors: ["#274a44", "#fff3b0", "#b8f0dd"],
    thoughts: ["CTA 빠지면 반려 대상이에요.", "문구 톤 맞춰서 바꿀게요."] },

  // ⑧ 협업 소통팀
  { dept: "partner", rank: "lead", name: "윤태오", role: "협업 소통 팀장", callsign: "브릿지",
    colors: ["#563a32", "#b8f0dd", "#b8f0dd"],
    thoughts: ["제가 실제로 보내진 않아요, 초안까지만요.", "핏 안 맞으면 정중히 거절할게요."] },
  { dept: "partner", rank: "member", name: "구서아", role: "답장 초안",
    colors: ["#452d3f", "#c9b8ff", "#fff3b0"],
    thoughts: ["금액·기간 없으면 확인 필요로 둘게요.", "톤은 정중하게 갈게요."] },

  // ⑨ 정산팀
  { dept: "finance", rank: "lead", name: "노한슬", role: "정산 팀장", callsign: "계산기",
    colors: ["#313b56", "#fff3b0", "#fff3b0"],
    thoughts: ["결제는 자동으로 안 해요.", "입금 대기 건부터 확인할게요."] },
  { dept: "finance", rank: "member", name: "진수아", role: "정산 관리",
    colors: ["#4b3b2c", "#b8f0dd", "#c9b8ff"],
    thoughts: ["근거 없는 금액은 안 적어요.", "지연 건은 따로 표시할게요."] },

  // ⑩ 성과리뷰팀
  { dept: "review", rank: "lead", name: "오세인", role: "성과리뷰 팀장", callsign: "인사이터",
    colors: ["#9c5c72", "#ff8fc0", "#ff8fc0"],
    thoughts: ["수치 없으면 억지로 안 만들어요.", "반복할 것 하나, 중단할 것 하나만요."] },
  { dept: "review", rank: "member", name: "편가온", role: "지표 수집",
    colors: ["#2e3a4a", "#ffe6f2", "#b8f0dd"],
    thoughts: ["게시 후 24시간 지표부터 볼게요.", "숫자만 갖고 올게요."] },
  { dept: "review", rank: "member", name: "지민결", role: "패턴 정리",
    colors: ["#6b4a2f", "#c9b8ff", "#fff3b0"],
    thoughts: ["이게 잘된 진짜 이유는요…", "패턴 한 줄로 정리할게요."] },

  // ⑪ 자동화 운영
  { dept: "ops", rank: "lead", name: "설로하", role: "자동화 운영 팀장", callsign: "파이프라인",
    colors: ["#3b3b49", "#b8f0dd", "#b8f0dd"],
    thoughts: ["실패는 성공으로 안 보고해요.", "재시도하고 로그부터 남길게요."] },
  { dept: "ops", rank: "member", name: "우다인", role: "모니터링",
    colors: ["#573049", "#fff3b0", "#ff8fc0"],
    thoughts: ["연결 끊긴 곳부터 확인할게요.", "미연동은 미연동이라고 적어요."] },

  // ⑫ 비서실
  { dept: "secretary", rank: "lead", name: "사공보람", role: "비서실장", callsign: "브리핑",
    colors: ["#7a453c", "#c9b8ff", "#c9b8ff"],
    thoughts: ["결정할 것만 추려드릴게요.", "요약만 하고 다시 안 만들어요."] },
  { dept: "secretary", rank: "member", name: "천서율", role: "보고 취합",
    colors: ["#334a3a", "#ffe6f2", "#fff3b0"],
    thoughts: ["중복 설명은 지울게요.", "한 줄씩 모아서 올릴게요."] },
];

/**
 * 외부 연동을 아직 안 붙인 팀 → 화면에 "연동 대기"로 표시됩니다.
 * 연동을 다 붙였거나, 그냥 전부 초록불로 보고 싶으면 빈 배열 []로 두세요.
 */
export const PENDING_INTEGRATIONS: Record<string, string> = {
  brand: "채널 지표 연동",
  partner: "메일 연동",
  finance: "재무 현황 파일",
};

/**
 * 결과 보관함 링크 (Notion 등). 비워두면 화면에서 링크 버튼이 숨겨집니다.
 * 예: "https://www.notion.so/내페이지주소"
 */
export const STORAGE_LINK = "";
