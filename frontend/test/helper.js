import { AxiosHooksMock } from 'axios-hooks-mock';
import useAxios from 'axios-hooks';

export const api = {
  /**
   * Utility wrapper for AxiosHooksMock; call with
   * arguments of `helper.api.something()` to mock those calls
   */
  mock() {
    // this global is ordinarily set by Django in the wrapper HTML
    global.MENTORING_SETTINGS = { // eslint-disable-line no-undef
      csrftoken: 'abc',
    };
    useAxios.mockImplementation(
      new AxiosHooksMock(
        [...arguments],
        [{ loading: false, error: new Error('unmatched axios request') }] // default
      ).implement()
    );
  },

  /**
   * Given participants (note: no schema is enforced on participants)
   */
  participants() {
    return {
      config: { method: 'GET', url: '/api/participants' },
      implementation: [ { data: [...arguments], loading: false }, jest.fn() ],
    };
  },

  /**
   * Given participant, by email (note: no schema is enforced on participants)
   */
  participantByEmail(email, participant) {
    let response;
    if (participant) {
      response = { data: participant, loading: false };
    } else {
      const error = new Error('not found');
      error.response = { status: 404 };
      response = { error, loading: false };
    }
    return {
      config: { method: 'GET', url: `/api/participants/by_email?email=${encodeURIComponent(email)}` },
      implementation: [ response, jest.fn() ],
    };
  },

  /**
   * Given pairs (note: no schema is enforced on participants)
   */
  pairs() {
    return {
      config: { method: 'GET', url: '/api/pairs' },
      implementation: [ { data: [...arguments], loading: false }, jest.fn() ],
    };
  },

  /**
   * Call the given callback when a pairing is posted
   */
  onPostPairing(cb) {
    return {
      config: { method: 'POST', url: '/api/pairs' },
      implementation: [ { loading: false }, cb ],
    };
  },

  /**
   * Call the given callback when a participant is posted (created)
   */
  onCreateParticipant(cb) {
    return {
      config: { method: 'POST', url: '/api/participants' },
      implementation: [ { loading: false }, cb ],
    };
  },

  /**
   * Call the given callback when a participant is PUT (updated).
   */
  onUpdateParticipant(id, cb) {
    return {
      config: { method: 'PUT', url: `/api/participants/${id}` },
      implementation: [ { loading: false }, cb ],
    };
  },
}
