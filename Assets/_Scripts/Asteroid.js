#pragma strict

var maxAsteroidVelocity :float;
var minAsteroidVelocity :float;
private var randomDirection :Vector3;
private var asteroidSize :int;

var explosionPrefab :GameObject;
var explosionSound :AudioClip;

private var velocity :Vector3;
private var asteroidHitPoints = 4;
var happened :boolean = false;

function Setup(size :int, velocityScale :float)
{
	asteroidSize = size;
	this.transform.localScale = transform.localScale * size;
	
	randomDirection = Vector3(Random.value, Random.value, 0);
	var asteroidVelocity = Mathf.Lerp(minAsteroidVelocity, maxAsteroidVelocity, Random.value);
	asteroidVelocity *= velocityScale;
	
	velocity = randomDirection * asteroidVelocity;
}

function FixedUpdate()
{
	if(happened == false)
	{
		happened = true;
		rigidbody.AddForce(velocity, ForceMode.Impulse);
	}
}
function Hit()
{
/*
	asteroidHitPoints--;
	if(asteroidHitPoints <= 0)
	{
		Explode();
	}
*/
Explode();
}

function Explode () {
	Destroy(this.gameObject);
}

/*
function Hit()
{
	asteroidHitPoints--;
	if(asteroidHitPoints <= 0)
	{
		Explode();
	}
}

function MissileHit()
{
	asteroidHitPoints = 0;
	Explode();
}

function Explode()
{
	var go = Instantiate(explosionPrefab, transform.position, transform.rotation);
	
	var det = go.GetComponent("Detonator");
	det.size = 10;
	
	AudioSource.PlayClipAtPoint(explosionSound, transform.position, 1.0);
	
	GameController.instance.gameEnemies--;
	GameController.instance.gameScore += 10;
	
	if(asteroidSize >= 3){
		GameController.instance.gameScore += 5;
	}
	if (asteroidSize == 5){
		GameController.instance.gameScore += 10;
	}
	
	Destroy(this.gameObject);
}
*/
