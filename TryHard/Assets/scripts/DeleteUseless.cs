using UnityEngine;
using System.Collections;

public class DeleteUseless : MonoBehaviour {
	void OnTriggerStay(Collider other){
		//Debug.Log ("AZAZAZAZA");
		other.gameObject.SetActive (false);
	}

}
