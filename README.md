listFilterWidget
================

jQuery list filter widget

### Get Started In Minutes

Apply listFilterWidget to your list

#### Build Your Content (HTML)

Your container should have a unique ID

```
<div id="container">
	<div class="items" data-filter="all category-1"> ... </div>
	<div class="items" data-filter="all category-2"> ... </div>
	<div class="items" data-filter="all category-3"> ... </div>
	<div class="items" data-filter="all category-4"> ... </div>
</div>
```

### Hide Target Elements (CSS)

Before we start we must add to our project’s stylesheet to hide our target elements.

```
#container .items{
	display: none;
}
```

### listFilterWidget it (JS)

Firstly make sure the jQuery and listFilterWidget JavaScript files are loaded into your document before your project’s own JavaScript file.

```
<script src="jquery.min.js"></script>
<script src="jquery.listfilterwidget.js"></script>
```

We’re ready to go!

```
$(function(){
	$('#container').listFilterWidget('category-4');	
});
```

If you’ve followed the above instructions correctly, your target elements should now appear and you’ll be ready to go.
