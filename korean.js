'use strict';
// UI-only localization: never changes serialized keys, asset names or character data.
(function(){
const pairs=`
Enable P2|P2 켜기

Open|열기
Save|저장
Export (For Game)|게임용 내보내기
Workspace|작업 공간
Open character / game project|캐릭터 / 게임 프로젝트 열기
Open workspace|작업 공간 열기
Save current character|현재 캐릭터 저장
Save whole workspace|전체 작업 공간 저장
New character|새 캐릭터
Rename character|캐릭터 이름 바꾸기
Character name|캐릭터 이름
Create|만들기
Rename|이름 바꾸기
Replace workspace?|작업 공간을 바꿀까요?
Replace workspace|작업 공간 바꾸기
Remove character?|캐릭터를 제거할까요?
Remove|제거
Make your next character.|다음 캐릭터를 만들어 보세요.
Create a character, or open a character / workspace to continue.|캐릭터를 새로 만들거나 저장한 캐릭터 / 작업 공간을 여세요.
Adds characters alongside the ones already in this workspace.|기존 캐릭터를 유지하고 작업 공간에 추가합니다.
Replaces the current workspace. Save your edits first.|현재 작업 공간을 바꿉니다. 변경 사항을 먼저 저장하세요.
Save the current workspace before replacing it if you want to keep these edits.|편집 내용을 유지하려면 교체하기 전에 현재 작업 공간을 저장하세요.
This removes the character from this workspace. Previously downloaded files are kept.|이 작업 공간에서만 캐릭터를 제거합니다. 이전에 다운로드한 파일은 유지됩니다.
P2 controls|P2 조작 키
P2 character|P2 캐릭터
P2 · dummy|P2 · 연습 상대
P2 input sequence|P2 입력 시퀀스
P2 uses arrow keys, U for M1, and I O P K L for skills 1–5. Controls apply only in Play mode.|P2 이동은 방향키, 기본 공격은 U, 스킬 1~5는 I O P K L입니다. 플레이 모드에서만 조작할 수 있습니다.
Inputs are relative to the start of this action. Tap lasts one tick; hold lasts the chosen duration. Requires a P2 character.|이 액션의 시작부터 입력 시점을 계산합니다. 누르기는 1틱, 길게 누르기는 지정한 기간 동안 유지됩니다. P2 캐릭터를 선택해야 합니다.
＋ P2 input|＋ P2 입력
Input|입력
Hold|길게 누르기
Duration · ticks|유지 시간 · 틱
Drag playhead|재생 위치 드래그
motion (old)|motion (기존 방식)
Add motion (old)|motion (기존 방식) 추가

X Shake · local axis ±|X 흔들림 · 로컬 축 ±
Y Shake · local axis ±|Y 흔들림 · 로컬 축 ±
Shake follows the object direction. Set an axis to 0 to stop it.|오브젝트 방향을 따라 흔들립니다. 축 값을 0으로 설정하면 해당 축의 흔들림이 멈춥니다.
In-game camera|게임 카메라
Selected object|선택한 오브젝트
Transform tool|변형 도구
Move ↔|이동 ↔
Rotate ⟳|회전 ⟳
Follow middle|중간 따라가기
Free view|자유 시점
Editor camera target|편집기 카메라 대상
Attributes|속성 값
VFX clones|VFX 클론
Action branches|액션 분기
Motion / Xmotion|모션 / Xmotion
Visual / clothing|외형 / 의상
Branch-only|분기 전용
Copy|복사
Duplicate|복제
Delete|삭제
Paste here|여기에 붙여넣기
Add Motion|모션 추가
Add Xmotion|Xmotion 추가
Add Event Window|이벤트 구간 추가
Smooth|부드럽게
Overshoot|목표를 넘긴 뒤 복귀
Authored demo · original character preserved.|작성된 데모 · 원본 캐릭터 보존됨
Perspective grid|원근 격자
Xmotion · curve|Xmotion · 곡선 보간
Motion · chase|모션 · 목표 추적
Random range|무작위 범위
Minimum|최솟값
Maximum|최댓값
Apply range|범위 적용
Use random range…|무작위 범위 사용…
Edit random range…|무작위 범위 편집…
Use fixed value|고정 값 사용
Random range · right-click to edit|무작위 범위 · 우클릭으로 편집
Rolls once per action entry and stays stable through the motion curve. Event windows reuse the roll. Structural timing and pivots remain fixed.|액션에 진입할 때 한 번 추첨하고 모션 곡선 전체에서 유지합니다. 이벤트 구간도 같은 값을 사용합니다. 프레임 시점과 회전 중심은 고정 값만 사용합니다.
Hold movement, jump or a skill key in Play mode. A held skill starts at the next eligible idle/walk tick. Mid-skill movement follows Stun; M1 continuation uses its authored branch conditions.|플레이 모드에서 이동·점프·스킬 키를 누른 채 유지할 수 있습니다. 스킬은 실행 가능한 다음 대기/걷기 틱에 시작합니다. 스킬 도중 이동은 Stun을 따르며, M1 연속 공격은 작성된 분기 조건을 따릅니다.
Copy all keys here|이 프레임의 모든 키 복사
Delete all keys here|이 프레임의 모든 키 삭제
Update game runtime|게임 런타임 업데이트
Choose game .sb3|게임 .sb3 선택
Select your game .sb3 to download a copy with Kayack Motion 1.1 embedded. Open that copy in a fresh TurboWarp tab before importing your newly exported character. Assets and game scripts are preserved.|게임 .sb3를 선택하면 Kayack Motion 1.1이 포함된 사본을 다운로드합니다. 새 TurboWarp 탭에서 사본을 연 뒤 새로 내보낸 캐릭터를 가져오세요. 에셋과 게임 스크립트는 유지됩니다.
Updated game copy downloaded. Open it in a fresh TurboWarp tab.|업데이트된 게임 사본을 다운로드했습니다. 새 TurboWarp 탭에서 여세요.
Load the included Kayack Motion 1.1 before importing this export. Replace the older extension. Random ranges also require it; fixed-value native-only exports do not.|내보낸 캐릭터를 가져오기 전에 포함된 Kayack Motion 1.1로 이전 확장을 교체하세요. 무작위 범위도 이 확장이 필요합니다. 고정 값만 사용하는 일반 블록 내보내기는 필요하지 않습니다.
Open character|캐릭터 열기
Save workspace|작업 저장
Restore|작업 불러오기
Export sprite|스프라이트 내보내기
ACTIONS|액션
ASSETS|에셋
Costumes|모양
Sounds|소리
Search assets|에셋 검색
Native / Hub editor (0.2)|원본 / Hub 편집기 (0.2)
Capture native reference…|원본 동작 캡처…
Captures one tested path. Native branches are not inferred.|실행한 경로 하나를 기록합니다. 원본의 조건 분기는 자동 변환되지 않습니다.
Look right|오른쪽 보기
Look left|왼쪽 보기
Facing|바라보는 방향
Camera track|카메라 트랙
Follow P1|P1 따라가기
Follow P2|P2 따라가기
Middle|두 플레이어의 중간
Center|화면 중앙 정렬
Test inputs|테스트 입력
Speed|속도
Zoom|확대/축소
Dopesheet|키프레임 편집
Graph editor|곡선 편집기
＋ Key|＋ 키프레임
＋ Event Window|＋ 이벤트 구간
New key type|새 키프레임 유형
Motion|모션
Xmotion|Xmotion
Length|길이
Scale|시간축 확대
＋ Weapon|＋ 무기
Selected Xmotion · outgoing segment|선택한 Xmotion · 다음 키까지의 구간
Curve preset|곡선 프리셋
Drag the two handles · right-click for presets|두 핸들을 드래그하세요 · 우클릭으로 프리셋 선택
INSPECTOR|속성
Done|완료
Loading…|불러오는 중…
60 FPS · Shift select · Alt drag duplicate · Ctrl/⌘ C/V · Delete · Space play|60 FPS · Shift 선택 · Alt 드래그 복제 · Ctrl/⌘ C/V 복사/붙여넣기 · Delete 삭제 · Space 재생
Settings|설정
Language|언어
Editor preferences|편집기 환경 설정
Theme|테마
Dark|어두운 테마
Light|밝은 테마
Red|붉은 테마
Blue|푸른 테마
dark|어두운 테마
light|밝은 테마
red|붉은 테마
blue|푸른 테마
Audio|오디오
Master volume|전체 음량
Coin flip sounds|코인 앞면 효과음
Sound offset · ms|소리 타이밍 보정 · ms
Negative sound offset plays earlier; positive plays later. Preview only. Sounds at playback start cannot be scheduled before you press Play.|음수는 소리를 앞당기고 양수는 늦춥니다. 미리보기에만 적용됩니다. 재생 시작 시점의 소리는 재생 버튼을 누르기 전으로 앞당길 수 없습니다.
Number controls|숫자 입력
Arrow-key step|방향키 증감 단위
Shift + arrow step|Shift + 방향키 증감 단위
Shortcuts|단축키
key|키프레임 추가
play|재생/일시정지
rotate|이동/회전 전환
delete|삭제
Preview|미리보기
Show hitboxes|히트박스 표시
Play mode keys|플레이 모드 조작키
left|왼쪽 이동
right|오른쪽 이동
jump|점프
down|아래
m1|기본 공격 (M1)
Export|내보내기
Compact Xmotion export|Xmotion 압축 내보내기
Load kayack-motion.js once in your game before importing compact characters. Off uses native blocks and is much larger.|압축된 캐릭터를 가져오기 전에 게임에 kayack-motion.js 확장을 한 번 추가하세요. 끄면 일반 블록을 사용하므로 블록 수가 크게 늘어납니다.
Reset play keys to WASD / 12345|조작키를 WASD / 12345로 초기화
Onion skins|이전 프레임 잔상
Ghost count|잔상 개수
Ghost interval · frames|잔상 간격 · 프레임
First ghost opacity · %|첫 잔상 불투명도 · %
Opacity decrease per ghost · %|잔상마다 줄어드는 불투명도 · %
Background|배경
Flat 2D|평면 2D
Parallax|원근 배경
Focal length|초점 거리
Back wall depth|배경 벽 깊이
Follow timeline playhead|재생 위치를 따라 시간축 스크롤
Ruler interval · minimum|시간 눈금 최소 간격
Keyframe size · px|키프레임 크기 · px
Floating damage numbers|피해량 숫자 표시
P1 clears rotation when recovered|P1 회복 시 회전 초기화
This switch controls the preview. To keep rotation in game, remove P1’s existing Set Dir? reset as you planned; the character export does not modify P1.|미리보기용 설정입니다. 게임에서도 회전을 유지하려면 P1의 기존 Set Dir? 초기화 코드를 제거해야 합니다. 캐릭터 내보내기는 P1을 수정하지 않습니다.
Status keyword suggestions|상태 효과 추천 목록
Apply keyword list|키워드 목록 적용
Load settings.txt|settings.txt 불러오기
Save settings.txt|settings.txt 저장
Action|액션
New action|새 액션
Create action|액션 만들기
Create|만들기
Rename|이름 변경
Rename action|액션 이름 변경
Delete action|액션 삭제
Name|이름
Native trigger|게임 실행 조건
Start with Idle Pos|Idle 시작 자세로 시작
Off inherits the current pose. Keys at frame 0 override the starting pose.|끄면 현재 자세를 이어받습니다. 0프레임 키프레임이 있으면 해당 값으로 덮어씁니다.
Loop start · inclusive|반복 시작 · 포함
Loop end · exclusive|반복 끝 · 미포함
The intro plays once, then this range repeats. Blank defaults to 0 / action length.|도입부를 한 번 재생한 뒤 지정한 구간을 반복합니다. 비워 두면 시작은 0, 끝은 액션 길이입니다.
New actions are branch-only until assigned a native trigger. M1 and Skill 1–5 reuse existing Hub inputs and cooldowns; adding an action does not create another game input.|새 액션은 게임 실행 조건을 지정하기 전까지 분기로만 실행됩니다. M1과 스킬 1~5는 기존 Hub의 입력과 쿨타임을 사용합니다. 액션을 추가해도 새 조작키가 생기지는 않습니다.
Fold timeline|시간축 접기
Expand timeline|시간축 펼치기
LOOP|반복 시작
LOOP END|반복 끝
END|끝
Frame|프레임
End frame|끝 프레임
Key|키프레임
Method|방식
Movement mode|이동 방식
Velocity|속도
Position|위치
Direction|방향
Angle|각도
Shake?|흔들기 사용
Shake ± X/Y|X/Y 무작위 흔들림 ±
Release motion on clash until next key|합 발생 시 다음 키까지 이동 제어 해제
Blank XV/YV releases that axis. 0 actively holds it. Direction follows LR: 90 becomes −90 facing left. Clash release preserves knockback until the next motion key.|XV/YV를 비우면 해당 축의 제어를 해제합니다. 0은 속도를 0으로 유지합니다. 방향은 LR을 따르므로 왼쪽을 보면 90이 −90이 됩니다. 합 발생 시 제어를 해제하면 다음 모션 키까지 밀려남을 유지합니다.
Writes XV/YV each tick; P1 applies its existing damping and gravity. XVd is never changed automatically.|매 틱 XV/YV를 설정하고 P1의 기존 감쇠와 중력을 적용합니다. XVd를 자동으로 변경하지 않습니다.
Position mode uses action-origin-relative coordinates and sends velocity for the next physics tick. It reads XVd without changing it. XVd = 0 prevents X movement.|위치 모드는 액션 시작점을 기준으로 좌표를 계산하고 다음 물리 틱의 속도를 설정합니다. XVd는 읽기만 하며 변경하지 않습니다. XVd가 0이면 가로로 이동할 수 없습니다.
Open graph editor|곡선 편집기 열기
The curve belongs to this key and interpolates toward the next motion key. No next key = hold pose.|이 키의 곡선은 다음 모션 키까지의 보간에 사용됩니다. 다음 키가 없으면 자세를 유지합니다.
Linear|선형
Ease in|서서히 가속
Ease out|서서히 감속
Ease in-out|부드러운 가속/감속
Stepped|즉시 전환
Visual|외형
Visuals|외형
Clothing|의상
Cloth|의상
Weapon|무기
Weapon2|무기 2
Weapon3|무기 3
Motion keyframe|모션 키프레임
Right costume|오른쪽 모양
Left costume|왼쪽 모양
Auto Flip|자동 좌우 반전
Auto Flip uses the right costume for both directions. Clothing flips on local X; rotating weapons on local Y. Manual flips combine with it.|양쪽 방향에 오른쪽 모양을 사용합니다. 의상은 로컬 X축, 회전하는 무기는 로컬 Y축으로 반전합니다. 수동 반전 설정도 함께 적용됩니다.
Size %|크기 %
Flip X|X축 반전
Flip Y|Y축 반전
Show object|오브젝트 표시
Show player|플레이어 표시
Layer relative to player|플레이어 기준 레이어
Pivot X · costume pixels|회전 중심 X · 모양 픽셀
Pivot Y · up positive|회전 중심 Y · 위쪽이 양수
Costume center X|모양 중심 X
Costume center Y|모양 중심 Y
Changes the shared costume center; per-key pivots are in Visual keys.|공유 모양의 중심을 변경합니다. 키프레임별 회전 중심은 외형 키에서 설정하세요.
Pivot offset from the original costume center. Export reuses the texture with a different center. Clear live Skin alias when using a custom pivot.|원래 모양 중심에 대한 오프셋입니다. 내보낼 때 같은 텍스처에 다른 중심을 적용합니다. 사용자 지정 회전 중심을 쓸 때는 Skin 별칭을 비우세요.
Skin alias suffix|Skin 별칭 접미사
Tint hands in preview|미리보기에서 손 색상 변경
Skin alias is appended to User + "." (for example Sword). Original Hub-created skins remain available in game. Preview tint replaces #ff7171 in SVGs.|Skin 별칭은 User + "." 뒤에 붙습니다(예: Sword). 기존 Hub에서 생성한 스킨은 게임에서 계속 사용할 수 있습니다. 미리보기에서는 SVG의 #ff7171 색상을 바꿉니다.
Exports U.Int Show = 1 / 0. Costume pivots and layers belong to the clothing/weapon tracks.|U.Int Show를 1 또는 0으로 내보냅니다. 모양의 회전 중심과 레이어는 의상/무기 트랙에서 설정합니다.
Sound|소리
Voice|음성
Voice ♫|음성 ♫
▶ Audition|▶ 미리 듣기
＋ Sound layer|＋ 소리 추가
Starts one sound. No shared-volume changes are made.|소리 하나를 재생합니다. 공유 음량은 바꾸지 않습니다.
Hitbox|히트박스
Hitboxes|히트박스
Width|너비
Height|높이
X offset|X 오프셋
Y offset|Y 오프셋
Lifetime · seconds|지속 시간 · 초
Delay · ticks|지연 · 틱
Damage|피해량
Stun|경직
X knockback|X 밀려남
Y knockback|Y 밀려남
Stagger|흐트러짐
Attack weight|공격 가중치
Space|좌표 기준
Attached|사용자에 부착
World after delay|지연 후 월드 좌표에 고정
Attack type|공격 유형
Sin|죄악
Unbreakable|파괴 불가
First hit flag|첫 타격 표시
Impact sound|타격 효과음
Apply to target|대상에게 부여
Gain on attacker|공격자가 획득
Extra settings|추가 설정
Keyword|키워드
Value|값
＋ Add item|＋ 항목 추가
Grab|붙잡기
Grab X|붙잡기 X
Grab Y|붙잡기 Y
Camera|카메라
Use game camera|게임 카메라 사용
Mode|모드
Chase owner|사용자 따라가기
Free position|자유 위치
Chase smoothing|따라가기 부드러움
Follow speed|따라가기 속도
1 = locked, 10 = slowest|1 = 즉시 고정, 10 = 가장 느림
Camera X|카메라 X
Camera Y|카메라 Y
Zoom %|확대율 %
Shake|흔들림
Follow smoothing 1 = locked, 10 = slowest. This key controls the game camera; the viewport Follow speed slider is preview-only.|부드러움 1은 즉시 고정, 10은 가장 느림입니다. 이 키는 게임 카메라를 제어합니다. 화면의 따라가기 속도 슬라이더는 미리보기 전용입니다.
Matches Camera V1: position, angle and zoom approach the target by 1/speed per tick. Duel includes the original +1 Y drift; game zoom uses value − 5.|Camera V1 방식: 위치, 각도, 확대율이 매 틱 차이의 1/속도만큼 목표에 접근합니다. Duel에는 원본의 Y +1 이동이 포함되며, 게임 확대율은 입력값 − 5를 사용합니다.
Effects|효과
Clone style|클론 style
Clone count|클론 개수
Exports set style → create clone → restore Weapon style. Existing VFX clone scripts are retained.|style 설정 → 클론 생성 → Weapon style 복구 순서로 내보냅니다. 기존 VFX 클론 스크립트는 유지됩니다.
Branch|분기
Branch to action|이동할 액션
A true branch abandons the current action. It starts the destination at frame 0 and never resumes this action.|조건이 참이면 현재 액션을 종료하고 대상 액션의 0프레임부터 시작합니다. 이전 액션으로 돌아오지 않습니다.
Conditions & alternatives|조건 및 대체 실행
Always · add condition|항상 실행 · 조건 추가
＋ Condition|＋ 조건
＋ ELSE outcome|＋ ELSE 실행 추가
＋ Nested ELSE|＋ 중첩 ELSE 추가
Remove ELSE|ELSE 제거
ELSE|아니면 (ELSE)
AND|그리고 (AND)
OR|또는 (OR)
Source|값의 출처
Compare|비교
Outcome|실행 내용
Repeat while true|조건이 참인 동안 반복
Repeat|반복
U.Int key|U.Int 키
Target|대상
Set|설정
Operation|연산
Add|더하기
Remove effect|효과 제거
＋ Effect|＋ 효과 추가
Skill UI|스킬 UI
Name · EN|영문 이름
Name · KR|한국어 이름
Width · EN|영문 표시 너비
Width · KR|한국어 표시 너비
Sin color|죄악 색상
wrath|분노
lust|색욕
sloth|나태
gluttony|탐식
gloom|우울
pride|오만
envy|질투
Hex color|HEX 색상 코드
Hex is exported. Your game Skillshower still needs the hex-color support you planned.|HEX 값을 내보냅니다. 게임의 Skillshower에도 HEX 색상 처리 코드를 추가해야 합니다.
Coins|코인
Coin type|코인 유형
Normal|일반
Blank|일반
Excision|절제
Reused|재사용
Hidden / reused|숨김 / 재사용
Flip tick / Doing|앞면 전환 틱 / Doing
Lifetime ticks / Doing|지속 틱 / Doing
Doing waits for U.Int coinN = true. Original Skillshower reads one digit of coin IDs: coin 10 needs a game-side fix.|Doing은 U.Int coinN = true를 기다립니다. 원본 Skillshower는 코인 번호를 한 자리만 읽으므로 10번 코인은 게임 코드를 수정해야 합니다.
＋ Coin|＋ 코인
Remove coin|코인 제거
Initial keys|초기 키 값
Player initial keys|플레이어 초기 키 값
＋ Initial key|＋ 초기 키 추가
Applied once to the entity at initialization. Exported through local U.Int; no global variables.|엔티티 초기화 시 한 번 적용합니다. 로컬 U.Int를 통해 내보내며 전역 변수를 추가하지 않습니다.
Passives|패시브
Character passives|캐릭터 패시브
Passive name|패시브 이름
＋ Passive|＋ 패시브 추가
Delete passive|패시브 삭제
Runs each game tick in list order, from one primary Weapon clone. Add changes the current value (SP add −1); Set replaces it. Rules export into the character without new global variables.|주 무기 클론 하나에서 목록 순서대로 매 게임 틱 실행합니다. 더하기는 현재 값에 더하고(예: SP에 −1), 설정은 값을 바꿉니다. 새 전역 변수 없이 캐릭터에 내보냅니다.
Play mode|플레이 모드
Play mode tests authored actions and passives. Native-only moves must be authored/captured first. Full native Hub cooldowns and character gimmicks are not emulated.|작성한 액션과 패시브를 테스트합니다. 원본에만 있는 동작은 먼저 작성하거나 캡처해야 합니다. 원본 Hub의 모든 쿨타임과 캐릭터 고유 기믹까지 재현하지는 않습니다.
P2 test dummy|P2 테스트 더미
P2 damage / stun|P2 피해량 / 경직
P2 starting point · this action|이 액션의 P2 시작 위치
P2 positions are session-only. Branches continue the same dummy state. Save position on the action where playback starts.|P2 위치는 현재 편집 세션에만 저장됩니다. 분기 후에도 더미 상태는 유지됩니다. 재생을 시작할 액션에서 위치를 저장하세요.
Enable P2 on an authored timeline. Native reference playback does not run the test dummy.|작성한 타임라인에서 P2를 켜세요. 원본 참고 재생에는 테스트 더미가 실행되지 않습니다.
P2 attacks|P2 공격
P2 attacks · starting action only|P2 공격 · 재생 시작 액션 전용
＋ P2 attack|＋ P2 공격 추가
Delete attack|공격 삭제
Spawn frame|생성 프레임
Preview-only attacks from P2 to P1, timed from the start of playback. Hitted becomes P2, so authored counter branches can react on the next tick. Uses Def / slash-pierce-blunt resistance and 100% Evasive; does not emulate every native defense or clash.|재생 시작 시점을 기준으로 P2가 P1을 공격하는 미리보기 기능입니다. Hitted가 P2가 되어 다음 틱에 반격 분기가 반응할 수 있습니다. Def, 참격/관통/타격 내성, 100% Evasive를 적용하지만 원본의 모든 방어 및 합을 재현하지는 않습니다.
Damage debug|피해량 디버그
Last hit|마지막 타격
Focused preview: Fragile scales damage. Other status effects are recorded only; no clash, evasion or full battle simulation.|제한된 미리보기: 취약은 피해량에 적용됩니다. 나머지 상태 효과는 기록만 합니다. 합, 회피를 포함한 전체 전투 시뮬레이션은 아닙니다.
Preview test inputs|미리보기 테스트 입력
Hold M1|M1 누른 상태 유지
Release at global tick|입력 해제 시점 · 전체 틱
Interrupt at tick (−1 off)|중단 시점 · 틱 (−1이면 끔)
Interruption Stun|중단 시 경직
＋ Test value|＋ 테스트 값
These values affect preview only. They are saved with the workspace, never baked into native U.Int defaults.|이 값들은 미리보기에만 적용됩니다. 작업 파일에는 저장되지만 원본 U.Int 기본값에 포함되지 않습니다.
Select objects|오브젝트 선택
No object selected. Click an asset to inspect its costume center without changing a keyframe.|선택한 오브젝트가 없습니다. 에셋을 클릭하면 키프레임을 바꾸지 않고 모양 중심을 확인할 수 있습니다.
Double-click a lane to add a key. Right-click for Motion, Xmotion or an Event Window. Select a key to edit it here.|트랙을 더블클릭하여 키를 추가하세요. 우클릭으로 모션, Xmotion, 이벤트 구간을 선택할 수 있습니다. 키를 선택하면 여기서 편집합니다.
Dragging / copy / delete affects the selection. Properties below edit the first key.|드래그, 복사, 삭제는 선택한 키 전체에 적용됩니다. 아래 속성은 첫 번째 키를 편집합니다.
Native reference preview. Adding the first key authors a replacement action; remaining native steps are not automatically converted.|원본 참고 미리보기입니다. 첫 키를 추가하면 원본을 대체하는 액션을 작성하게 됩니다. 나머지 원본 동작은 자동으로 변환되지 않습니다.
Capture a native path|원본 실행 경로 캡처
Capture into a new action|새 액션으로 캡처
This records a tested execution, not every possible branch. Keep the native original for mechanics that need manual rebuilding. Captured frame poses use Xmotion; combat events and conditions must be rebuilt explicitly.|실행한 경로 하나를 기록하며 가능한 모든 분기를 기록하지는 않습니다. 수동으로 재구성할 기믹을 위해 원본을 보관하세요. 자세는 Xmotion으로 캡처되며 전투 이벤트와 조건은 직접 구성해야 합니다.
Choose character|캐릭터 선택
Character name|캐릭터 이름
New character|새 캐릭터
New character from starter|기본 틀로 새 캐릭터 만들기
Uses the included working Lucio scaffold and assets. Authored attacks start empty. Review inherited Hub gimmicks in the Native / Hub editor.|포함된 Lucio 기본 틀과 에셋을 사용합니다. 작성할 공격은 비어 있는 상태로 시작합니다. 원본 / Hub 편집기에서 상속된 Hub 기믹을 확인하세요.
Kayack · click to swap red / blue|Kayack · 클릭하면 빨강/파랑 전환
FRAME · 60 FPS|프레임 · 60 FPS
`;const dict=Object.fromEntries(pairs.trim().split('\n').map(s=>{const i=s.indexOf('|');return[s.slice(0,i),s.slice(i+1)];}));
Object.assign(dict,{'Curve':'곡선','Curve ●':'곡선 ●','Fixed mask UV':'마스크 UV 고정','Show page performance':'웹페이지 성능 표시','voronoi':'보로노이','gradient noise':'그라디언트 노이즈','simple noise':'단순 노이즈','Final Output':'최종 출력','Mesh name':'메시 이름','VFX Studio · particles and shaders':'VFX Studio · 파티클 및 셰이더'});
Object.assign(dict,{"Drag ports to connect · drag background to pan · wheel to zoom": "포트를 드래그하여 연결 · 배경 드래그로 이동 · 휠로 확대", "Output ●": "출력 ●", "color": "색상", "edgeColor": "가장자리 색상", "texture": "텍스처", "noise": "노이즈", "mask": "마스크", "fixedMask": "마스크 UV 고정", "alphaSource": "알파 소스", "dissolveSource": "디졸브 소스", "blend": "블렌딩", "wrap": "반복 방식", "channel": "채널", "doubleSided": "양면 렌더링", "depthWrite": "깊이 기록", "opacity": "불투명도", "intensity": "밝기", "dissolve": "디졸브", "softness": "부드러움", "edgeWidth": "가장자리 두께", "distortion": "왜곡", "noiseScale": "노이즈 크기", "noiseSpeed": "노이즈 속도", "tileU": "U 반복", "tileV": "V 반복", "offsetU": "U 오프셋", "offsetV": "V 오프셋", "scrollU": "U 스크롤", "scrollV": "V 스크롤", "bloom": "블룸", "bloomThreshold": "블룸 임계값", "bloomRadius": "블룸 반경", "Refresh": "새로 고침", "KAYACK VFX • Material Studio": "KAYACK VFX • 재질 스튜디오", "texture alpha": "텍스처 알파", "luminance": "휘도", "mask texture": "마스크 텍스처", "main texture": "메인 텍스처", "additive": "가산", "clamp": "고정", "repeat": "반복", "constant": "상수", "parameter": "매개변수", "time": "시간", "seed": "시드", "sample": "텍스처 샘플", "add": "더하기", "subtract": "빼기", "multiply": "곱하기", "divide": "나누기", "mix": "혼합", "sine": "사인", "cosine": "코사인", "absolute": "절댓값", "one minus": "1에서 빼기", "power": "거듭제곱", "fraction": "소수부", "floor": "내림", "length": "길이", "normalize": "정규화", "rotate UV": "UV 회전", "tiling offset": "반복 및 오프셋", "vector1": "벡터 1", "vector2": "벡터 2", "vector3": "벡터 3", "vector4": "벡터 4"});
const originals=new WeakMap(),attrs=new WeakMap();
function protectedNode(n){return !!n.parentElement?.closest('#actions,#assets,#charName,#actionName,#costumeNames,#soundNames,#keywords,#previewState,#download,[data-asset-name],input,textarea,script,style,.playerhud');}
function languageText(s){if(s==='VFX Studio · 파티클 및 셰이더')s='VFX Studio · particles and shaders';const chunks=s.split(' / ');if(chunks.length>1&&/[가-힣]/.test(chunks.at(-1)))return prefs.language==='ko'?chunks.at(-1):chunks.slice(0,-1).join(' / ');return prefs.language==='ko'?translate(s):s;}
function translate(s){const t=s.trim(),pad=s.match(/^\s*/)[0],end=s.match(/\s*$/)[0];if(dict[t])return pad+dict[t]+end;if(/^[▸▾✓] /.test(t))return pad+t.slice(0,2)+translate(t.slice(2))+end;if(t.startsWith('Curve: '))return pad+'곡선: '+translate(t.slice(7))+end;const patterns=[[/^(\d+) selected$/,'$1개 선택'],[/^Weapon(\d*) · xmotion$/,'무기 $1 · Xmotion'],[/^Coin (\d+)$/,'코인 $1'],[/^All keys at frame (\d+)$/,'$1프레임의 모든 키'],[/^Delete (Weapon\d*) everywhere$/,'$1 전체 삭제'],[/^Delete costume$/,'모양 삭제'],[/^Delete sound$/,'소리 삭제'],[/^Exported (\d+) blocks$/,'$1개 블록 내보냄']];for(const [r,v]of patterns)if(r.test(t))return pad+t.replace(r,v)+end;return s;}
function apply(root){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];if(root.nodeType===3)nodes.push(root);else while(w.nextNode())nodes.push(w.currentNode);for(const n of nodes){if(protectedNode(n))continue;let item=originals.get(n);if(!item||n.nodeValue!==item.output)item={source:n.nodeValue};const out=languageText(item.source);item.output=out;originals.set(n,item);if(n.nodeValue!==out)n.nodeValue=out;}const elems=root.nodeType===1?[root,...root.querySelectorAll('[title],[placeholder],[aria-label]')]:[];for(const e of elems){if(e.closest('#assets,#actions,#charName,#actionName,#costumeNames,#soundNames,#keywords'))continue;let saved=attrs.get(e)||{};for(const k of ['title','placeholder','aria-label']){if(!e.hasAttribute(k))continue;const v=e.getAttribute(k);if(!saved[k]||saved[k].output!==v)saved[k]={source:v};const out=languageText(saved[k].source);saved[k].output=out;if(v!==out)e.setAttribute(k,out);}attrs.set(e,saved);}}
const observer=new MutationObserver(records=>{observer.disconnect();for(const r of records){if(r.type==='characterData')apply(r.target);else if(r.type==='attributes')apply(r.target);else for(const n of r.addedNodes)apply(n);}watch();});
function watch(){observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','placeholder','aria-label']});}
function language(){document.documentElement.lang=prefs.language==='ko'?'ko':'en';observer.disconnect();apply(document.body);watch();}
window.KayackI18n={original:el=>{if(!el)return'';return [...el.childNodes].map(n=>n.nodeType===3?(originals.get(n)?.source??n.nodeValue):n.textContent).join('');},dictionary:dict};
const settings=$('settings').onclick;$('settings').onclick=()=>{settings();const p=$('modalBody'),row=E('label',undefined);row.className='field';E('span','Language',row);const s=E('select',undefined,row);for(const [v,t]of [['en','English'],['ko','한국어']]){const o=E('option',t,s);o.value=v;}s.value=prefs.language||'en';s.onchange=()=>{prefs.language=s.value;persistPrefs();language();};p.prepend(row);};
language();
})();
