#pragma strict
// Scroll main texture based on time
var scrollSpeed = 1.0;
// This must be set to override a bug where Render Order
// of the tunnel objects is lost when SetTextureOffset is used
var queue = 0;
private var offset = 0.0;
static var instanceTunnel :TunnelScroll;
var speed;

function Update () 
{    
	offset = Time.time * scrollSpeed;
    renderer.material.SetTextureOffset ("_MainTex", Vector2(0, offset));
    renderer.material.renderQueue = queue;
}

function SetScrollSpeed (speed: float){
	scrollSpeed = speed;
}