<div class="wrap">
    <h2> <span id="icon-options-general" class="icon32 abtest-big-icon"></span> А/Б тестирование страниц wppage</h2>
    <?php
    if(isset($_GET['action'])){
        switch ($_GET['action']) {
            case 'details':
                include_once 'experiment-details.php';
                break;
            case 'new':
                include_once 'experiment-new.php';
                break;
            case 'delete':
                include_once 'experiment-delete.php';
                break;
            case 'empty':
                include_once 'experiment-empty.php';
                break;
            case 'edit':
                include_once 'experiment-edit.php';
                break;
            default:
                include_once 'experiment-list.php';
                break;
        }
    }else{
        include_once 'experiment-list.php';
    }
    ?>
</div>
