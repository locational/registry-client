import { MutationTree } from 'vuex';
import { ConfigState } from './types';
import { TConfig } from '@locational/config-validation/build/module/lib/config_types/TConfig';

export const mutations: MutationTree<ConfigState> = {
    config_loaded(state, payload: TConfig) {
        state.error = false;
        state.applets_config = payload;
    },
    config_error(state) {
        state.error = true;
        state.applets_config = undefined;
    }
};