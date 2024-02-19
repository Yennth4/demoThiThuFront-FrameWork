window.DetailController = function($scope , $http , $routeParams){
    $scope.title = "Xem chi tiết bài viết";

    let linkApi = "http://localhost:3000/post";
    
    let postID = $routeParams.id;

    $http.get(
        `${linkApi}/${postID}`
    ).then(function(response){
        if(response.status == 200){
            $scope.post = {
                id: response.data.id,
                tieu_de: response.data.tieu_de,
                noi_dung: response.data.noi_dung,
                tac_gia: response.data.tac_gia,
                the_loai: response.data.the_loai,
                ngay_dang: new Date(response.data.ngay_dang)
            }
        }
    });
}