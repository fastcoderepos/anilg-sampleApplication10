cube(`Address`, {
  sql: `SELECT * FROM public.address`,
  
  joins: {
    City: {
      sql: `${CUBE}.city_id = ${City}.city_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
		count_address: {
			sql: 'address',
			type: 'count'
		},
		countDistinct_address: {
			sql: 'address',
			type: 'countDistinct'
		},
		countDistinctApprox_address: {
			sql: 'address',
			type: 'countDistinctApprox'
		},
		count_address2: {
			sql: 'address2',
			type: 'count'
		},
		countDistinct_address2: {
			sql: 'address2',
			type: 'countDistinct'
		},
		countDistinctApprox_address2: {
			sql: 'address2',
			type: 'countDistinctApprox'
		},
		count_district: {
			sql: 'district',
			type: 'count'
		},
		countDistinct_district: {
			sql: 'district',
			type: 'countDistinct'
		},
		countDistinctApprox_district: {
			sql: 'district',
			type: 'countDistinctApprox'
		},
		count_postal_code: {
			sql: 'postal_code',
			type: 'count'
		},
		countDistinct_postal_code: {
			sql: 'postal_code',
			type: 'countDistinct'
		},
		countDistinctApprox_postal_code: {
			sql: 'postal_code',
			type: 'countDistinctApprox'
		},
		count_phone: {
			sql: 'phone',
			type: 'count'
		},
		countDistinct_phone: {
			sql: 'phone',
			type: 'countDistinct'
		},
		countDistinctApprox_phone: {
			sql: 'phone',
			type: 'countDistinctApprox'
		},
		sum_address_id: {
			sql: 'address_id',
			type: 'sum'
		},
		avg_address_id: {
			sql: 'address_id',
			type: 'avg'
		},
		min_address_id: {
			sql: 'address_id',
			type: 'min'
		},
		max_address_id: {
			sql: 'address_id',
			type: 'max'
		},
		runningTotal_address_id: {
			sql: 'address_id',
			type: 'runningTotal'
		},
		count_address_id: {
			sql: 'address_id',
			type: 'count'
		},
		countDistinct_address_id: {
			sql: 'address_id',
			type: 'countDistinct'
		},
		countDistinctApprox_address_id: {
			sql: 'address_id',
			type: 'countDistinctApprox'
		}
  },
  
  dimensions: {
    address: {
      sql: `address`,
      type: `string`
    },
    
    address2: {
      sql: `address2`,
      type: `string`
    },
    
    district: {
      sql: `district`,
      type: `string`
    },
    
    postalCode: {
      sql: `postal_code`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },

    addressId: {
      sql: `address_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
