<script>
  
  import { T, useTask } from '@threlte/core'
  import { interactivity } from '@threlte/extras';
  import { Spring } from 'svelte/motion';

  interactivity()
  const scale = new Spring(1)

  let rotation = 0
  let speed = 0.001
  let x_rotation = 0
  let x_speed = 0

  useTask(() => {
    rotation += speed
    x_rotation += x_speed
  })
</script>

<!--https://threlte.xyz/-->
<T.PerspectiveCamera 
    makeDefault
    position={[10, 10, 10]}
    oncreate={(ref) => {
        ref.lookAt(0, 1, 0)
    }}
/>

<T.DirectionalLight position={[0, 10, 10]}/>

<T.Mesh
  rotation.y = {rotation}
  rotation.x = {x_rotation}
  scale = {scale.current}
  onpointerenter={() => {
    scale.target = 2
    speed = 0.01
    x_speed = 0.01
  }}

  onpointerleave={() => {
    scale.target = 1
    speed = 0.001
    x_speed = 0
    x_rotation = 0
  }}
>
  <T.BoxGeometry args={[3, 3, 3]}/>
  <T.MeshBasicMaterial color="rgba(0, 81, 255, 1)"/>
  <T.MeshStandardMaterial color="rgba(0, 81, 255, 1)" />
</T.Mesh>
