<script lang="ts">
  //https://threlte.xyz/docs/reference/extras/gltf

  import { T } from '@threlte/core'
  import { Environment, GLTF, OrbitControls } from '@threlte/extras'

  let { model } = $props()
</script>

<Environment url="/shanghai_riverside_2k.hdr" />

<T.PerspectiveCamera
  makeDefault
  position={[10, 4, 0]}
  fov={25}
>
  <OrbitControls
    autoRotate
    enableDamping
    noZoom
  />
</T.PerspectiveCamera>

<T.AmbientLight />

<GLTF url={ model } />
