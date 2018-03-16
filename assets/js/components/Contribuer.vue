<template>
    <div type="x-template" id="contribuer">
    <section class="content">
        <a class="retour" href=""><i class="fa fa-chevron-left"></i></a>
        <h1>Ajouter un contenu</h1>
        <ul>
            <router-link to="/contribution_form" class="btn btn-primary">-></router-link>
            <li><i class="fa fa-pencil" data-toggle="modal" data-target="#Modal-1"></i><p>Écrire</p></li>
            <li><i class="fa fa-photo" data-toggle="modal" data-target="#Modal-2"></i><p>Photo</p></li>
            <li><i class="fa fa-camera" data-toggle="modal" data-target="#Modal-3"></i><p>Vidéo</p></li>
            <li><i class="fa fa-ellipsis-h" data-toggle="modal" data-target="#Modal-4"></i><p>Plus</p></li>
        </ul>
        <!--<div class="alert alert-info disclaimer" role="alert">-->
            <!--<p class="location"></p>-->
            <!--<p>Est-ce bien l'adresse à laquelle vous souhaitez déposer un contenu ?</p>-->
            <!--<hr>-->
            <!--<button class="alert-link close-alert">ok</button>-->
        <!--</div>-->

            <div class="modal fade" id="Modal-1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="Modal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="Modal-3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="Modal-4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel3">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

    </section>
</div>
</template>

<script>
    export default {
        name: "contribuer"
    }
</script>

<style scoped>

</style>