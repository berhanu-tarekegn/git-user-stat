import Bus from '../bus'

export default {
  name:'GithubInput',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit(event) {
      if (this.username && this.username !== '') {
        Bus.$emit('new-username', this.username)
      }
    }
  },
 
}