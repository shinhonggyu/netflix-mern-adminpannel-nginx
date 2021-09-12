const ListReducer = (state, action) => {
  // GET LISTS
  if (action.type === 'GET_LISTS_START') {
    return {
      lists: [],
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'GET_LISTS_SUCCESS') {
    return {
      lists: action.payload,
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'GET_LISTS_FAILURE') {
    return {
      lists: [],
      isFetching: false,
      error: true,
    };
  }

  // DELETE LIST
  if (action.type === 'DELETE_LIST_START') {
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'DELETE_LIST_SUCCESS') {
    return {
      lists: state.lists.filter((list) => list._id !== action.payload),
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'DELETE_LIST_FAILURE') {
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  }

  // // CREATE LIST
  if (action.type === 'CREATE_LIST_START') {
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'CREATE_LIST_SUCCESS') {
    return {
      lists: [...state.lists, action.payload],
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'CREATE_LIST_FAILURE') {
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  }

  // UPDATE LIST
  if (action.type === 'UPDATE_LIST_START') {
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'UPDATE_LIST_SUCCESS') {
    return {
      lists: state.lists.map(
        (list) => list._id === action.payload._id && action.payload
      ),
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'UPDATE_LIST_FAILURE') {
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  }

  return { ...state };
};

export default ListReducer;
