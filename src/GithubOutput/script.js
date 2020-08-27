import Bus from '../bus'
import Vue from 'vue'

export default {

  name: 'GithubOutput',
  data() {
    return {
      currentUsername: null,
      githubData: {}
    }
  },
  created() {
    Bus.$on('new-username', this.onUsernameChanged)
  },
  destroyed() {
    Bus.$off('new-username', this.onUsernameChanged)
  },
  methods: {

    fetchGithubData(name) {

      if(this.githubData.hasOwnProperty(name)) return

      const url = `http://api.github.com/users/${name}`

      fetch(url)
        .then(r => r.json())
        .then(data => {
          Vue.set(this.githubData, name , data)
          
        })

    },

    onUsernameChanged(name) {
      this.currentUsername = name;
      this.fetchGithubData(name);
    }


  }

}