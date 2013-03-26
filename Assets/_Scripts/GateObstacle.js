private var player : Player;

// This is called when the player hits part of the wall
// It sets a flag saying that the player unsuccessfully cleared the gate
function OnTriggerEnter (col : Collider)
{
	player = col.GetComponent (Player);
	player.HitWall();
}
