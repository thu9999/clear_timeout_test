# clear_timeout_test
- Checking clear setTimeout
- Giả sử có 1 hàm setTimeout trong componentDidMount như sau:
setTimeout(_ => {
  this.setState({
    name: 'Jack'
  })
}, 5 * 1000);
- Callback trong hàm setTimeout này sẽ thực hiện set state của component sau 5s component đã được mount.
- Trong khoảng 5s này, ta thử remove component khỏi DOM bằng cách click vào button toggle 
- Test 2 trường hợp:
+ TH1: Trong componentWillUnmount của component này KHÔNG clearTimeout
+ TH2: Trong componentWillUnmount của component này CÓ clearTimeout
