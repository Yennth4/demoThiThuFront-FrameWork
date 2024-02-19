window.ListController = function($scope , $http) {

    $scope.title = "Danh sách bài viết";

    let linkApi = "http://localhost:3000/post";

    $http.get(linkApi).then(function(response){
        $scope.listpost = response.data;
    })

    $scope.delete = function(id){
        let confirm = window.confirm("Bạn chắc chăn muốn xóa id " + id + " hay không ?");
        if (confirm){
            $http.delete(`${linkApi}/${id}`).then(function(response){
                if(response.status == 200){
                    alert("Bạn đã xóa thành công id " + id);
                }                
            });
        }
    }
}