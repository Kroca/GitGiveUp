using UnityEngine;
using System.Collections;

public class LevelList : MonoBehaviour {

	//public int needLevel;
	public void LoadLevel(int needLevel){
		Application.LoadLevel (needLevel);
	}
	// Update is called once per frame
	public void LoadFirst(){
		Application.LoadLevel(Application.loadedLevel+1);
	}
}
