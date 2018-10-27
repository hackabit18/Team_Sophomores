package com.example.prath.noah

import android.annotation.SuppressLint
import android.app.IntentService
import android.app.PendingIntent
import android.content.ContentValues.TAG
import android.content.Context
import android.content.Context.LOCATION_SERVICE
import android.content.Intent
import android.graphics.Color
import android.location.Location
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.os.Parcel
import android.os.Parcelable
import android.provider.SyncStateContract
import android.util.Log
import com.google.android.gms.common.internal.Constants
import com.google.android.gms.location.*
import com.google.android.gms.location.Geofence.GEOFENCE_TRANSITION_ENTER

import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.Circle
import com.google.android.gms.maps.model.CircleOptions
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import java.util.*
import android.support.annotation.NonNull
import com.google.android.gms.tasks.OnFailureListener
import com.google.android.gms.tasks.OnSuccessListener
import com.google.android.gms.location.GeofencingClient



class MapsActivity : AppCompatActivity(), OnMapReadyCallback {

    var geofencelist= arrayListOf<Geofence>();
    private lateinit var mMap: GoogleMap
private  lateinit var mgeofencingClient: GeofencingClient



    @SuppressLint("MissingPermission")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_maps)
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        mgeofencingClient = LocationServices.getGeofencingClient(this);
        val mapFragment = supportFragmentManager
                .findFragmentById(R.id.map) as SupportMapFragment
        mapFragment.getMapAsync(this);


    }
        fun makeNotificationIntent(geofenceService: Context): Intent {
            return Intent(geofenceService, MapsActivity::class.java)
        }

        @SuppressLint("MissingPermission")
        override fun onMapReady(googleMap: GoogleMap) {
            mMap = googleMap


            val alleppey = LatLng(9.4981, 76.3388)
            val fenc=5000.0f;
            val geofencel = Geofence.Builder().setCircularRegion(alleppey.latitude, alleppey.longitude, fenc)
                    .setExpirationDuration(Geofence.NEVER_EXPIRE)
                    .setTransitionTypes(GEOFENCE_TRANSITION_ENTER or Geofence.GEOFENCE_TRANSITION_EXIT)
                    .setRequestId("make")
                    .build()

            val changanacheri = LatLng(9.44, 76.541)

            val geofence2 = Geofence.Builder().setCircularRegion(changanacheri.latitude, changanacheri.longitude, fenc)
                    .setExpirationDuration(Geofence.NEVER_EXPIRE)
                    .setTransitionTypes(GEOFENCE_TRANSITION_ENTER or Geofence.GEOFENCE_TRANSITION_EXIT)
                    .setRequestId("make")
                    .build()

            val chathurthiakary = LatLng(9.939, 76.541)

            val geofence3 = Geofence.Builder().setCircularRegion(changanacheri.latitude, changanacheri.longitude, fenc)
                    .setExpirationDuration(Geofence.NEVER_EXPIRE)
                    .setTransitionTypes(GEOFENCE_TRANSITION_ENTER or Geofence.GEOFENCE_TRANSITION_EXIT)
                    .setRequestId("make")
                    .build()

            geofencelist.add(geofencel)
            geofencelist.add(geofence2)
            geofencelist.add(geofence3)
            mMap.addMarker(MarkerOptions().position(alleppey).title("alleppay"));
            mMap.moveCamera(CameraUpdateFactory.newLatLng(alleppey))
            mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(alleppey, 9.0f))

            mMap.addMarker(MarkerOptions().position(changanacheri).title("changanacheri"));
            mMap.moveCamera(CameraUpdateFactory.newLatLng(changanacheri))
            mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(changanacheri, 9.0f))

            mMap.addMarker(MarkerOptions().position(chathurthiakary).title("chaturthiakary"));
            mMap.moveCamera(CameraUpdateFactory.newLatLng(chathurthiakary))
            mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(chathurthiakary, 9.0f))



            mgeofencingClient.addGeofences(getGeofencingRequest(), geofencePendingIntent())
                    .addOnSuccessListener(OnSuccessListener<Void> {

                    })
                    .addOnFailureListener(OnFailureListener {

                    })
            val circle1 = mMap.addCircle(CircleOptions()
                    .center(LatLng(alleppey.latitude, alleppey.longitude))
                    .radius(fenc+0.0)
                    .fillColor(0x40ff0000)
                    .strokeColor(Color.TRANSPARENT)

            )

            val circle2 = mMap.addCircle(CircleOptions()
                    .center(LatLng(changanacheri.latitude, changanacheri.longitude))
                    .radius(fenc+0.0)
                    .fillColor(0x40ff0000)
                    .strokeColor(Color.TRANSPARENT)

            )
            val circle3 = mMap.addCircle(CircleOptions()
                    .center(LatLng(chathurthiakary.latitude, chathurthiakary.longitude))
                    .radius(fenc+0.0)
                    .fillColor(0x40ff0000)
                    .strokeColor(Color.TRANSPARENT)

            )
        }
        private fun geofencePendingIntent(): PendingIntent {
            val intent = Intent(this, GeofenceTransitionsIntentService::class.java)
            val mGeofencePendingIntent = PendingIntent.getService(this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT)
            return mGeofencePendingIntent
        }


        private fun getGeofencingRequest(): GeofencingRequest {
            return GeofencingRequest.Builder().apply {
                setInitialTrigger(GeofencingRequest.INITIAL_TRIGGER_DWELL )
                addGeofences(geofencelist)
            }.build()
        }

    class GeofenceTransitionsIntentService() : IntentService(""){
        // ...
        override fun onHandleIntent(intent: Intent?) {
            val geofencingEvent = GeofencingEvent.fromIntent(intent)


            // Get the transition type.
            val geofenceTransition = geofencingEvent.geofenceTransition

            // Test that the reported transition was of interest.
            if (geofenceTransition == Geofence.GEOFENCE_TRANSITION_ENTER) {
                // do something
            } else if (geofenceTransition == Geofence.GEOFENCE_TRANSITION_EXIT) {
                // do something else
            } else if (geofenceTransition == Geofence.GEOFENCE_TRANSITION_DWELL) {
                // do something else again
            }
        }




        }
    }






//    // ..
//
//     fun  sendNotification(){
//
//}
//    override fun onHandleIntent(intent: Intent?) {
//        val geofencingEvent = GeofencingEvent.fromIntent(intent)
//        if (geofencingEvent.hasError()) {
//            //val errorMessage = GeofenceErrorMessages.getErrorString(this,
//              //      geofencingEvent.errorCode)
//       //     Log.e(TAG, errorMessage)
//            return
//        }
//
//        // Get the transition type.
//        val geofenceTransition = geofencingEvent.geofenceTransition
//
//        // Test that the reported transition was of interest.
//        if (geofenceTransition == GEOFENCE_TRANSITION_ENTER |
//        geofenceTransition == Geofence.GEOFENCE_TRANSITION_EXIT) {
//
//            // Get the geofences that were triggered. A single event can trigger
//            // multiple geofences.
//            val triggeringGeofences = geofencingEvent.triggeringGeofences
//
//            // Get the transition details as a String.
//            val geofenceTransitionDetails = getGeofenceTransitionDetails(
//                    this,
//                    geofenceTransition,
//                    triggeringGeofences
//            )
//
//            // Send notification and log the transition details.
//            sendNotification(geofenceTransitionDetails)
//            Log.i(TAG, geofenceTransitionDetails)
//        }
//        //else {
//            // Log the error.
//         //   Log.e(TAG, getString(R.string.geofence_transition_invalid_type,
//          //          geofenceTransition)
//        }
//
//    private fun getGeofenceTransitionDetails(geofenceTransitionsIntentService: GeofenceTransitionsIntentService, geofenceTransition: Int, triggeringGeofences: List<Geofence>): String? {
//
//    }








