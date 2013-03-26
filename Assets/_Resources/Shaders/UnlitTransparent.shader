Shader "Unlit/Unlit Transparent" {
	Properties {
		_Color ("Main Color", Color) = (1,1,1,1)
		_MainTex ("Base (RGB)", 2D) = "white" {}
	}
	
	Category{
		Lighting On
		ZWrite Off
		Cull Back
		Blend SrcAlpha OneMinusSrcAlpha
	Tags { Queue = Transparent }
	
	SubShader {
		Material {
			Emission [_Color]
		}
		
		Pass {
			SetTexture [_MainTex] {
				Combine Texture * Primary, Texture * Primary
			}
		}
	}
}

}