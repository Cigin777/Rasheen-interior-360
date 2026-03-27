var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1329031379779959,
          "pitch": 0.09028071862252851,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 1.7789025862689947,
          "pitch": 0.22610913497568497,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 2.4439626570276616,
          "pitch": 0.10265227763892781,
          "rotation": 7.853981633974483,
          "target": "9-gf-kids-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.23508516455435924,
        "pitch": -0.012167501287281723,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 0.6552785564537782,
          "pitch": -0.039092165167282644,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.014247585730576162,
        "pitch": -0.0949088171834589,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -1.5870952909252338,
          "pitch": 0.07994634193462602,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -1.160212020890727,
          "pitch": 0.05843208011712875,
          "rotation": 1.5707963267948966,
          "target": "1-living-room"
        },
        {
          "yaw": 0.24322465352675593,
          "pitch": 0.08299728248433169,
          "rotation": 0,
          "target": "3-wash-unit"
        },
        {
          "yaw": -0.1672448683195782,
          "pitch": -0.28278508634891963,
          "rotation": 0.7853981633974483,
          "target": "11-upper-living"
        },
        {
          "yaw": -2.956183255668382,
          "pitch": 0.22722157539763543,
          "rotation": 0,
          "target": "9-gf-kids-bedroom"
        },
        {
          "yaw": 1.3893483624894785,
          "pitch": 0.11833332895001192,
          "rotation": 0,
          "target": "7-gf-master-bedroom"
        },
        {
          "yaw": 0.42449414113037065,
          "pitch": 0.08076572004422111,
          "rotation": 1.5707963267948966,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-unit",
      "name": "WASH UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0427427571916823,
        "pitch": -0.05353830712913066,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.6296940474162795,
          "pitch": 0.4827147261812854,
          "rotation": 4.71238898038469,
          "target": "4-courtyard"
        },
        {
          "yaw": -2.31121439546995,
          "pitch": 0.3403098905195563,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -1.3890853855669434,
          "pitch": -0.07258410155050399,
          "rotation": 7.0685834705770345,
          "target": "11-upper-living"
        },
        {
          "yaw": 0.832253725570606,
          "pitch": 0.17072660351091784,
          "rotation": 1.5707963267948966,
          "target": "5-kitchen"
        },
        {
          "yaw": -2.700875499412204,
          "pitch": 0.0592841803502413,
          "rotation": 0,
          "target": "9-gf-kids-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-courtyard",
      "name": "COURTYARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.029786232062569695,
        "pitch": -0.034068999042460746,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -3.018575310765806,
          "pitch": -0.3300828633642947,
          "rotation": 0,
          "target": "3-wash-unit"
        },
        {
          "yaw": -2.6045216105791695,
          "pitch": -0.3066055509249992,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.4140717623224468,
          "pitch": -0.14106972788118277,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.08904741081603973,
        "pitch": 0.02676915356456533,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 1.3625898063571,
          "pitch": 0.03615679060797028,
          "rotation": 0,
          "target": "6-workarea"
        },
        {
          "yaw": 3.059814064243552,
          "pitch": 0.14637378842735416,
          "rotation": 0,
          "target": "3-wash-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-workarea",
      "name": "WORKAREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.08548602325008403,
        "pitch": 0.041370510054328236,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.10462092698644909,
          "pitch": 0.17214720503027792,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6989562749489222,
          "pitch": 0.06986846955999404,
          "title": "EXIT DOOR",
          "text": "PEEK"
        }
      ]
    },
    {
      "id": "7-gf-master-bedroom",
      "name": "GF MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.13177941781372837,
        "pitch": 0.004837739833320143,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 0.4289232804486254,
          "pitch": 0.023729646472377297,
          "rotation": 0,
          "target": "8-gf-master-bedroom-mirror-unit"
        },
        {
          "yaw": -2.6561558562113596,
          "pitch": -0.026469084183727176,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 1.3446778815620917,
          "pitch": 0.023211740422830474,
          "rotation": 1.5707963267948966,
          "target": "10-walk-in-robe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gf-master-bedroom-mirror-unit",
      "name": "GF MASTER BEDROOM MIRROR UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -1.9985391201402365,
          "pitch": 0.062066188321784566,
          "rotation": 4.71238898038469,
          "target": "7-gf-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-kids-bedroom",
      "name": "GF KIDS BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0018043090343198287,
        "pitch": 0.021897328197232113,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.8243603057371285,
          "pitch": 0.050073252002079016,
          "rotation": 0,
          "target": "10-walk-in-robe"
        },
        {
          "yaw": -1.1790138812603779,
          "pitch": 0.09808818936486219,
          "rotation": 4.71238898038469,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-walk-in-robe",
      "name": "WALK-IN ROBE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.09973518552906135,
        "pitch": 0,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.11917362961474254,
          "pitch": 0.07574117348901765,
          "rotation": 4.71238898038469,
          "target": "9-gf-kids-bedroom"
        },
        {
          "yaw": -3.1160250558094695,
          "pitch": 0.11508680846676,
          "rotation": 0,
          "target": "7-gf-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upper-living",
      "name": "UPPER LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.33837981170828435,
        "pitch": 0.019468475319683876,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -1.0463373875107749,
          "pitch": 0.1234544041718415,
          "rotation": 0,
          "target": "12-ff-storage-room"
        },
        {
          "yaw": -0.6738012349975229,
          "pitch": 0.09494489547163454,
          "rotation": 0,
          "target": "13-ff-master-bedroom"
        },
        {
          "yaw": -0.4085977927518094,
          "pitch": 0.08013091212162848,
          "rotation": 0,
          "target": "15-ff-bedroom-2"
        },
        {
          "yaw": -2.5446028454368967,
          "pitch": 0.2575302963311952,
          "rotation": 21.991148575128566,
          "target": "2-dining"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7847296681794163,
          "pitch": 0.02735433662797071,
          "title": "WAY TO BALCONY",
          "text": "PEEK"
        }
      ]
    },
    {
      "id": "12-ff-storage-room",
      "name": "FF STORAGE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.13357111622406848,
        "pitch": -0.0316362723944863,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 2.7227057058310233,
          "pitch": 0.05441696139503982,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ff-master-bedroom",
      "name": "FF MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.22439947525639425,
        "pitch": -0.021892389070822915,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 0.6522241567175868,
          "pitch": 0.007052115194584374,
          "rotation": 0,
          "target": "14-ff-master-bedroom-mirror-unit"
        },
        {
          "yaw": 2.856974356964616,
          "pitch": 0.05071460785952908,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ff-master-bedroom-mirror-unit",
      "name": "FF MASTER BEDROOM MIRROR UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0281743148909115,
          "pitch": 0.05008082656823021,
          "rotation": 0,
          "target": "13-ff-master-bedroom"
        },
        {
          "yaw": 2.22267763099566,
          "pitch": 0.03321216261733184,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ff-bedroom-2",
      "name": "FF BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02137137859584115,
        "pitch": 0.06570610420393308,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.4900830141345338,
          "pitch": 0.04868184559523847,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-toilet-sample",
      "name": "TOILET SAMPLE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1255604898839913,
        "pitch": 0.0778739012787355,
        "fov": 1.417305062686052
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "RASHEEN RESIDENCY ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
