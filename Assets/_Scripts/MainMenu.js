@script ExecuteInEditMode()

var guiSkin :GUISkin;
var gameSceneName :String;

private var textAreaString :String = "";
private var isLoading :boolean = false;


function OnGUI ()
{
//GUI.color = Color.green;
GUI.backgroundColor = Color.grey;
GUI.contentColor = Color.yellow;

	if(guiSkin)
	{
		GUI.skin = guiSkin;
	}
	
	else
	{
		Debug.Log("Menu: GUI Skin object is missing!");
	}
	
	if(GUI.Button(Rect((Screen.width/2) - 160, Screen.height - 110, 320, 70), "Let's Play"))
	{
		isLoading = true;
		PlayerPrefs.SetString("PlayerName", textAreaString);
		Application.LoadLevel(gameSceneName);
	}
	
	textAreaString = GUI.TextField (Rect((Screen.width/2)-60, Screen.height - 580, 120, 120), textAreaString);
	
	var isWebPlayer = (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer);
	/*
	if(!isWebPlayer)
	{
		if(GUI.Button(Rect((Screen.width/2) -160, Screen.height - 80, 320, 120), "Quit"))
		{
			Application.Quit();
		}
	}
	*/
	
	
	
	if(isLoading)
	{
		GUI.Label(Rect(5, (Screen.height) - 20, 400, 70), "Loading Level");
	}
	
	//DrawHighScores();
	
	
}


function DrawHighScores()
{
	for(var i = 0; i <10; i++)
	{
		if(HighScores.instance)
		{
			var score = HighScores.instance.GetScore(i);
			var player = HighScores.instance.GetPlayer(i);
		}
		
		GUI.Label(Rect((Screen.width/2) -100, 50 + (25*i), 200, 20), (i + 1) + " - " + player + " - " + score);
	}
}
