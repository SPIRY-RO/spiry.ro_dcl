import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../bfc3b541-5953-4c4c-b318-4ec41e0be6c2/src/item"
import Script2 from "../da30258e-3cc1-48a4-bc55-508e923ae977/src/item"
import Script3 from "../7cd4d0bc-54d4-4f64-8ab2-6f18f41f03a3/src/item"
import Script4 from "../b2d25644-2f43-48c0-a845-6b2220593411/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(12.5, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 1, 5)
})
floorBlack.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/BlackFloor.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
floorBlack.addComponentOrReplace(gltfShape)

const wallAncientEgiptian = new Entity('wallAncientEgiptian')
engine.addEntity(wallAncientEgiptian)
wallAncientEgiptian.setParent(_scene)
const gltfShape2 = new GLTFShape("models/AncientEgiptianWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallAncientEgiptian.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(10.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.374999523162842, 1, 1.4999996423721313)
})
wallAncientEgiptian.addComponentOrReplace(transform3)

const wallAncientEgiptian6 = new Entity('wallAncientEgiptian6')
engine.addEntity(wallAncientEgiptian6)
wallAncientEgiptian6.setParent(_scene)
wallAncientEgiptian6.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(12, 0, 16.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000048875808716, 1, 1.5000030994415283)
})
wallAncientEgiptian6.addComponentOrReplace(transform4)

const wallAncientEgiptian8 = new Entity('wallAncientEgiptian8')
engine.addEntity(wallAncientEgiptian8)
wallAncientEgiptian8.setParent(_scene)
wallAncientEgiptian8.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(12, 0, 27.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.500014066696167, 1, 1.5000066757202148)
})
wallAncientEgiptian8.addComponentOrReplace(transform5)

const wallcornerAncientEgyptian = new Entity('wallcornerAncientEgyptian')
engine.addEntity(wallcornerAncientEgyptian)
wallcornerAncientEgyptian.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(12.5, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
wallcornerAncientEgyptian.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("models/AncientEgyptianCorner.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallcornerAncientEgyptian.addComponentOrReplace(gltfShape3)

const wallAncientEgiptian7 = new Entity('wallAncientEgiptian7')
engine.addEntity(wallAncientEgiptian7)
wallAncientEgiptian7.setParent(_scene)
wallAncientEgiptian7.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(4, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 0.9999998211860657)
})
wallAncientEgiptian7.addComponentOrReplace(transform7)

const wallAncientEgiptian9 = new Entity('wallAncientEgiptian9')
engine.addEntity(wallAncientEgiptian9)
wallAncientEgiptian9.setParent(_scene)
wallAncientEgiptian9.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(7, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 0.9999998211860657)
})
wallAncientEgiptian9.addComponentOrReplace(transform8)

const wallAncientEgiptian10 = new Entity('wallAncientEgiptian10')
engine.addEntity(wallAncientEgiptian10)
wallAncientEgiptian10.setParent(_scene)
wallAncientEgiptian10.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(10, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 0.9999998211860657)
})
wallAncientEgiptian10.addComponentOrReplace(transform9)

const wallcornerAncientEgyptian2 = new Entity('wallcornerAncientEgyptian2')
engine.addEntity(wallcornerAncientEgyptian2)
wallcornerAncientEgyptian2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(12.5, 0, 10.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.6875081062316895, 1, 1.5000098943710327)
})
wallcornerAncientEgyptian2.addComponentOrReplace(transform10)
wallcornerAncientEgyptian2.addComponentOrReplace(gltfShape3)

const wallAncientEgiptian5 = new Entity('wallAncientEgiptian5')
engine.addEntity(wallAncientEgiptian5)
wallAncientEgiptian5.setParent(_scene)
wallAncientEgiptian5.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(1, 0, 15),
  rotation: new Quaternion(-1.8182431745073473e-16, 0.7071068286895752, -8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(2, 1, 1)
})
wallAncientEgiptian5.addComponentOrReplace(transform11)

const wallAncientEgiptian11 = new Entity('wallAncientEgiptian11')
engine.addEntity(wallAncientEgiptian11)
wallAncientEgiptian11.setParent(_scene)
wallAncientEgiptian11.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(1, 0, 19),
  rotation: new Quaternion(-1.8182431745073473e-16, 0.7071068286895752, -8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(2, 1, 1)
})
wallAncientEgiptian11.addComponentOrReplace(transform12)

const wallAncientEgiptian12 = new Entity('wallAncientEgiptian12')
engine.addEntity(wallAncientEgiptian12)
wallAncientEgiptian12.setParent(_scene)
wallAncientEgiptian12.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(1, 0, 23),
  rotation: new Quaternion(-1.8182431745073473e-16, 0.7071068286895752, -8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(2, 1, 1)
})
wallAncientEgiptian12.addComponentOrReplace(transform13)

const wallcornerAncientEgyptian3 = new Entity('wallcornerAncientEgyptian3')
engine.addEntity(wallcornerAncientEgyptian3)
wallcornerAncientEgyptian3.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(0.5, 0, 30.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000035762786865, 1, 2.2500057220458984)
})
wallcornerAncientEgyptian3.addComponentOrReplace(transform14)
wallcornerAncientEgyptian3.addComponentOrReplace(gltfShape3)

const wallcornerAncientEgyptian4 = new Entity('wallcornerAncientEgyptian4')
engine.addEntity(wallcornerAncientEgyptian4)
wallcornerAncientEgyptian4.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(0.5, 0, 10.5),
  rotation: new Quaternion(6.6273814439284616e-15, -1, 1.1920927533992653e-7, -7.450580596923828e-8),
  scale: new Vector3(2, 1, 2.25)
})
wallcornerAncientEgyptian4.addComponentOrReplace(transform15)
wallcornerAncientEgyptian4.addComponentOrReplace(gltfShape3)

const stairsFloating = new Entity('stairsFloating')
engine.addEntity(stairsFloating)
stairsFloating.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(2.5, 0, 25),
  rotation: new Quaternion(-2.1502418409995085e-15, 5.960464477539063e-8, -4.641245036679422e-15, 1),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
stairsFloating.addComponentOrReplace(transform16)
const gltfShape4 = new GLTFShape("models/floatingStairs.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
stairsFloating.addComponentOrReplace(gltfShape4)

const roofGlass = new Entity('roofGlass')
engine.addEntity(roofGlass)
roofGlass.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(12.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.3102993965148926, 1, 2.5312492847442627)
})
roofGlass.addComponentOrReplace(transform17)
const gltfShape5 = new GLTFShape("models/GlassRoof.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
roofGlass.addComponentOrReplace(gltfShape5)

const roofGlassCornerSmall = new Entity('roofGlassCornerSmall')
engine.addEntity(roofGlassCornerSmall)
roofGlassCornerSmall.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(10.5, 0, 10.5),
  rotation: new Quaternion(8.480510808569e-15, 1, -1.1920928244535389e-7, -5.960464477539063e-8),
  scale: new Vector3(1, 1, 1)
})
roofGlassCornerSmall.addComponentOrReplace(transform18)
const gltfShape6 = new GLTFShape("models/GlassRoof_Corner_Small.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roofGlassCornerSmall.addComponentOrReplace(gltfShape6)

const roofGlassCornerSmall2 = new Entity('roofGlassCornerSmall2')
engine.addEntity(roofGlassCornerSmall2)
roofGlassCornerSmall2.setParent(_scene)
roofGlassCornerSmall2.addComponentOrReplace(gltfShape6)
const transform19 = new Transform({
  position: new Vector3(0, 0, 12.5),
  rotation: new Quaternion(5.635778607302692e-15, 0.7071067690849304, -8.429369557916289e-8, -0.70710688829422),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
roofGlassCornerSmall2.addComponentOrReplace(transform19)

const roofGlass2 = new Entity('roofGlass2')
engine.addEntity(roofGlass2)
roofGlass2.setParent(_scene)
roofGlass2.addComponentOrReplace(gltfShape5)
const transform20 = new Transform({
  position: new Vector3(10, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.3102993965148926, 1, 2.5312492847442627)
})
roofGlass2.addComponentOrReplace(transform20)

const dclMap = new Entity('dclMap')
engine.addEntity(dclMap)
dclMap.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(13, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dclMap.addComponentOrReplace(transform21)
const gltfShape7 = new GLTFShape("models/DCL_Map.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
dclMap.addComponentOrReplace(gltfShape7)

const roofGlass3 = new Entity('roofGlass3')
engine.addEntity(roofGlass3)
roofGlass3.setParent(_scene)
roofGlass3.addComponentOrReplace(gltfShape5)
const transform22 = new Transform({
  position: new Vector3(10, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.3102993965148926, 1, 1.2656246423721313)
})
roofGlass3.addComponentOrReplace(transform22)

const roofGlass4 = new Entity('roofGlass4')
engine.addEntity(roofGlass4)
roofGlass4.setParent(_scene)
roofGlass4.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(12.5, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.3102993965148926, 1, 2.5312492847442627)
})
roofGlass4.addComponentOrReplace(transform23)

const fireHydrantBlue = new Entity('fireHydrantBlue')
engine.addEntity(fireHydrantBlue)
fireHydrantBlue.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(15, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fireHydrantBlue.addComponentOrReplace(transform24)
const gltfShape8 = new GLTFShape("models/Fire_Hydrant_Blue.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
fireHydrantBlue.addComponentOrReplace(gltfShape8)

const airConditioning = new Entity('airConditioning')
engine.addEntity(airConditioning)
airConditioning.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(1.5, 2.5, 17.5),
  rotation: new Quaternion(0, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
airConditioning.addComponentOrReplace(transform25)

const speakers = new Entity('speakers')
engine.addEntity(speakers)
speakers.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(2, 0, 20),
  rotation: new Quaternion(-5.664537599323462e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
speakers.addComponentOrReplace(transform26)

const cyberpunkDoor = new Entity('cyberpunkDoor')
engine.addEntity(cyberpunkDoor)
cyberpunkDoor.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(12, 0, 16.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.000004768371582, 1, 1.0000011920928955)
})
cyberpunkDoor.addComponentOrReplace(transform27)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape9 = new GLTFShape("models/CityTile.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
entity.addComponentOrReplace(gltfShape9)
const transform28 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform28)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape9)
const transform29 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform29)

const flyingCarHorizontalPlatform2 = new Entity('flyingCarHorizontalPlatform2')
engine.addEntity(flyingCarHorizontalPlatform2)
flyingCarHorizontalPlatform2.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(9.5, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flyingCarHorizontalPlatform2.addComponentOrReplace(transform30)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(airConditioning, {"clickable":true}, createChannel(channelId, airConditioning, channelBus))
script2.spawn(speakers, {"clickable":true,"onActivate":[{"entityName":"speakers","actionId":"activate","values":{}}]}, createChannel(channelId, speakers, channelBus))
script3.spawn(cyberpunkDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor","actionId":"toggle","values":{}}],"onOpen":[]}, createChannel(channelId, cyberpunkDoor, channelBus))
script4.spawn(flyingCarHorizontalPlatform2, {"distance":3,"speed":6,"autoStart":true,"onReachEnd":[{"entityName":"flyingCarHorizontalPlatform2","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"flyingCarHorizontalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, flyingCarHorizontalPlatform2, channelBus))