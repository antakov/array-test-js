var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];

function isPlainObject(v) {
  return Object.prototype.toString.call(v) === '[object Object]';
}

function flattenEntry(obj) {
  if (!isPlainObject(obj)) return obj;

  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (isPlainObject(v)) {
      const flat = flattenEntry(v);
      for (const [ik, iv] of Object.entries(flat)) {
        if (!(ik in out)) out[ik] = iv;
      }
    } else if (Array.isArray(v)) {
      out[k] = v.slice();
    } else {
      out[k] = v;
    }
  }
  return out;
}

function mutateArray(a) {
  if (!Array.isArray(a)) return [];
  return a.map(item => flattenEntry(item));
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
