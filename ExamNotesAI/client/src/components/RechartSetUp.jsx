import React from "react";
import * as Recharts from "recharts";

function ReChartSetUp({ charts }) {
  if (!charts || charts.length === 0) return null;

  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

  return (
    <div className="space-y-8">
      {charts.map((chart, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl p-4 bg-white"
        >
          <h4 className="font-semibold text-gray-800 mb-3">
            📊 {chart.title}
          </h4>

          <div className="h-72">
            <Recharts.ResponsiveContainer width="100%" height="100%">
              
              {/* 🔵 BAR CHART */}
              {chart.type === "bar" && (
                <Recharts.BarChart data={chart.data}>
                  <Recharts.XAxis dataKey="name" />
                  <Recharts.YAxis />
                  <Recharts.Tooltip />
                  <Recharts.Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {(chart.data || []).map((_, i) => (
                      <Recharts.Cell
                        key={i}
                        fill={COLORS[i % COLORS.length]}
                      />
                    ))}
                  </Recharts.Bar>
                </Recharts.BarChart>
              )}

              {/* 🟣 LINE CHART */}
              {chart.type === "line" && (
                <Recharts.LineChart data={chart.data}>
                  <Recharts.XAxis dataKey="name" />
                  <Recharts.YAxis />
                  <Recharts.Tooltip />
                  <Recharts.Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={3}
                  />
                </Recharts.LineChart>
              )}

              {/* 🟡 PIE CHART */}
              {chart.type === "pie" && (
                <Recharts.PieChart>
                  <Recharts.Tooltip />
                  <Recharts.Pie
                    data={chart.data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {(chart.data || []).map((_, i) => (
                      <Recharts.Cell
                        key={i}
                        fill={COLORS[i % COLORS.length]}
                      />
                    ))}
                  </Recharts.Pie>
                </Recharts.PieChart>
              )}

            </Recharts.ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReChartSetUp;