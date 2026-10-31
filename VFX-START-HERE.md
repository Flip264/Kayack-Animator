# Kayack Animator 0.6.9 — VFX authoring preview

Open index.html after extracting the entire ZIP. Existing character/workspace files still open.

## Make an effect
1. Open a character and click **✦ VFX** in the top bar.
2. Add **Petals**, **Slash**, or **Sparks**. Duplicate and rename to build variants.
3. Select a mesh/material. Expand Emission, Shape, Velocity, Lifetime, Mesh rotation, Outer perspective and Quality.
4. Use **Materials & meshes** for the existing VFX Studio directory, material controls, texture previews, PNG textures, OBJ/FBX meshes, and library import. Open VFX again when finished.
5. Use **Shader graph** for a draggable node canvas. Click an output, then an input to connect. Right-click an input to disconnect. Choose a final output, then Apply. Shader compilation errors leave the previous material intact.
6. **Place on timeline** inserts a Particle / mesh VFX key in Visuals at the current frame. Its inspector controls offset, follow owner, facing mirror and layer. Existing conditions and event windows also work. Be careful with repeating windows: each execution creates an emitter.
7. Save the character or workspace. The emitter definitions and material library are saved with it.

All durations/lifetimes are ticks: 60 ticks = 1 second in your game. Speeds are pixels/tick; spin is degrees/tick. Direction uses Scratch's 0=up, 90=right convention. Velocity End is a multiplier at the end of a particle's lifetime. Drag decays speed exponentially; gravity is a Y acceleration. Lifetime easing controls size, opacity and dissolve.

Shape distribution: random or evenly distributed; point/cone, line, box, disc (ellipse), ring and sphere. A cone controls the emission direction/spread; it is not a separate conical volume.

**Mesh rotation** rotates each particle mesh. **Outer perspective** transforms the whole emitter image afterward: inner rotation, X/Y stretch, yaw and pitch. These are separate stages. The existing slashPerspective extension can still be applied to the emitter sprite in TurboWarp, but do not apply the same tilt twice accidentally.

Material changes affect all emitters using that material. **Instance material overrides** affect only that emitter definition. Duplicate the emitter for a different instance preset; mesh/texture GPU resources remain shared. During game playback the existing clone override blocks can adjust the emitter's material instance.

## Export to your game
Use **Export (For Game)**. The ZIP includes the sprite, Kayack Motion where needed, and the updated **kayack-vfx.js (VFX Studio 0.6)**.

Open a fresh TurboWarp tab, load the updated VFX JS unsandboxed, then load the game and import the exported sprite. An already loaded older extension cannot be hot-replaced. Keep your existing perspective extension installed for original character scripts that use it.

New effects export as one special clone per emitter, using one clone-private //Mover payload. Particles do not create Scratch clones or individual skins. Generated VFX clones are gated out of the original character clone hats, follow the entity using local U.Key helpers, use the original Layer custom block, then restore/remove the skin and delete themselves. The emitter material/mesh library is embedded in the sprite's extensionStorage.

No changes to P1/P2 or the game engine are required. This does not export arbitrary Unity shaders; both environments run the same bundled Kayack shader implementation.

## Performance and boundaries
- Start with 16–48 particles and 256px resolution. Try 512px for a large slash. Resolution 1024 is much more expensive.
- Maximum 256 live particles per emitter. Dense meshes are further limited to roughly 50,000 rendered triangles per emitter/frame (at least one particle). The preview reports capped particles.
- Particles outside Canvas bounds are clipped. Increase bounds when an effect travels farther; this reduces effective pixel density at a fixed resolution.
- Geometry/textures/material programs are shared. Each simultaneously running emitter still allocates four render textures; it is not free. Avoid many overlapping high-resolution emitters and repeated-window spam.
- These are ordinary WebGL mesh draws per particle, not GPU compute or hardware-instanced particles. Bloom runs once per emitter.
- Graph supports the original operations plus vector/noise/UV operations and up to 64 nodes: UV, time, seed, constants, parameters, texture samples, noise, math, mix, smoothstep, channel/compose. It is a bounded VFX graph, not full Unity Shader Graph.
- No particle collisions, ribbons/trails, skeletal mesh animation, sub-emitters or arbitrary Scratch clone-code import yet. Multi-point velocity/gravity curves are supported; see CHANGES-0.6.9.md.
- New authored P1 effect tracks are previewed. P2-equipped effects and arbitrary existing native VFX clone scripts are not interpreted in the animator preview yet. Exported effects run on whichever entity owns the character.
- Existing native effects remain in the original character scripts; they are not automatically converted into editable emitters.
- This build passed browser WebGL/render checks and exported-block structural checks. A full live battle in your exact project has not been run here. Test a copy of the game first.

## BambooKim reference
Your provided sprite references global SlashMesh1 and Testone1, but its private VFX library is empty. Those global assets are not contained in the sprite. Import the VFX Studio library JSON exported from the full game to recreate that exact effect. The original references are preserved; presets are not substitutes for the missing assets.

## 한국어 빠른 시작
상단 **✦ VFX** → 꽃잎/참격/불꽃 추가 → 이미터 속성 편집 → **타임라인에 추가**.
재질·메시 버튼에서 기존 VFX Studio의 재질, 텍스처, OBJ/FBX 가져오기 기능을 사용할 수 있습니다.
셰이더 그래프는 출력 포트를 클릭한 뒤 입력 포트를 클릭해 연결하고, 최종 출력을 지정한 뒤 적용합니다.
캐릭터 저장 시 이미터와 라이브러리가 함께 저장됩니다. 게임용 내보내기 ZIP의 최신 kayack-vfx.js를 새 TurboWarp 탭에 비샌드박스 확장으로 먼저 설치하세요.
수명/방출 기간은 틱 단위이며, 60틱이 1초입니다. 파티클 수와 해상도를 낮게 시작하세요. Unity 전체 기능을 제공하는 것은 아니며 위 제한 사항이 적용됩니다.
