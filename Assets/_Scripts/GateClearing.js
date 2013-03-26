private var player : Player;

// This is called when we enter the gate, but we aren't sure if the player
// has hit part of the wall or not
function OnTriggerEnter (col : Collider)
{
	player = col.GetComponent (Player);
	player.IncreaseGateCount();
}

// This is called when we're done moving through the gate, and figures out
// if the player was rotated correctly enough to not hit any walls
function OnTriggerExit (col : Collider) {	
	player.DetermineGateSuccess();
}