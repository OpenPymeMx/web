//-*- coding: utf-8 -*-
openerp.web_widget_plotly_chart = function(instance) {
    'use strict';

    var AbstractField = instance.web.form.AbstractField;

    instance.web.form.PlotlyChartWidget = AbstractField.extend({
        render_value: function() {
            var val = this.get("value", "");
            if (this.get("effective_readonly")) {
                this.$el.html(val);
            }
        }
    });

    instance.web.form.widgets = instance.web.form.widgets.extend({
        'plotly_chart': 'instance.web.form.PlotlyChartWidget',
    });

};
