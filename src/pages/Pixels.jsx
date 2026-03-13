import { Unity, useUnityContext } from "react-unity-webgl";

export default function Pixels() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Build/UnityProjects.loader.js",
        dataUrl: "/Build/UnityProjects.data.unityweb",
        frameworkUrl: "/Build/UnityProjects.framework.js.unityweb",
        codeUrl: "/Build/UnityProjects.wasm.unityweb",
        webglContextAttributes: {
            preserveDrawingBuffer: true,
            alpha: true, 
          },
      });
    return (
      <>
        <h2>★ PIXELS ★</h2>
        <p>Pixel art, some environments, or small games that I make a long the way.</p>
        <br></br>
        <br></br>
        <h3>Cyberpunk Room</h3>
        <div>Just some cyberpunk pixel assets that I made with Aseprite thrown together in Unity. I really like the Light2D components unity provides! The playable character has a very clunky walking animatio.. but you can use the arrow keys to walk around!</div>
        <br></br>
        <div className="game-container">
          <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
        </div>
      </>
    )
  }
  