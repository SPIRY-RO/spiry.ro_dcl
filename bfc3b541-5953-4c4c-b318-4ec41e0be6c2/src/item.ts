export type Props = {
clickable,
onActivate?
}
/// click to hear siren, click again for siren to stop

export default class Door implements IScript<Props> {
  Clip = new AudioClip("bfc3b541-5953-4c4c-b318-4ec41e0be6c2/sounds/Fan.mp3")
  

  active: Record<string, boolean> = {}

  init() {}

toggle(entity: Entity) {
 
    const source = new AudioSource(this.Clip)
    entity.addComponentOrReplace(source)
    source.playing = true
}


  spawn(host: Entity, props: Props, channel: IChannel) {
    const car = new Entity(host.name + "-button")
    car.setParent(host)

    

    car.addComponent(new GLTFShape("bfc3b541-5953-4c4c-b318-4ec41e0be6c2/models/Air_Conditioning_Unit.glb"))

    if(props.clickable){
      car.addComponent(
          new OnPointerDown(() => {
            const activateAction = channel.createAction('activate', {})
            channel.sendActions([activateAction])
          })
        )
  }


    // handle actions
    channel.handleAction("activate", ({ sender }) => {
      this.toggle(car)
      if (sender === channel.id) {
        channel.sendActions(props.onActivate)
      }
    })
   
  }
}

    // sync initial values
