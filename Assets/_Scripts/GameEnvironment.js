#pragma strict
var asteroidPrefab : Asteroid;
var maxAsteroidSize :int;
var minAsteroidSize :int;
var asteroidCount :int;
private var spawnedAsteroids = 0;

function Start () {
	GenObstacles();
}

function Update () {

	
}

function GenObstacles() {

	var i = 0;
	var j = 0;
	while (j < 150000) {
		GenAsteroids(3+i, 250+j, 350+j);
		i += 3;
		j += 300;
		yield WaitForSeconds(4.0);
	}
}

function GenAsteroids (nAsteroid: int, nearZ: int, farZ: int){
	while(spawnedAsteroids < nAsteroid)
	{
		var xPos = Mathf.Lerp(-10, 10, Random.value);
		var yPos = Mathf.Lerp(-10, 10, Random.value);
		var zPos = Mathf.Lerp(nearZ, farZ, Random.value);
		var rand = Random.Range(maxAsteroidSize, minAsteroidSize);
	
		var newAsteroid :Asteroid = Instantiate (asteroidPrefab);
		newAsteroid.transform.position = Vector3(xPos, yPos, zPos);

		newAsteroid.Setup(rand, 1.5);
	
		spawnedAsteroids++;
	}
}