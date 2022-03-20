import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export function loadOBJModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader()

    loader.load(
      glbPath,
      obj => {
        obj.name = 'duck'
        obj.position.y = 30
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        obj.rotation.x = Math.PI / 2;
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
